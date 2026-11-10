/* Half-rate planar reflection and a small wave shader, no postprocessing chain. */
(() => {
  'use strict';
  function create(T, renderer) {
    const target=new T.WebGLRenderTarget(512,256,{depthBuffer:true,stencilBuffer:false});
    const mirror=new T.PerspectiveCamera(), textureMatrix=new T.Matrix4();
    const bias=new T.Matrix4().set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1);
    const uniforms={
      reflection:{value:target.texture},textureMatrix:{value:textureMatrix},time:{value:0},
      tint:{value:new T.Color('#315f59')},eye:{value:new T.Vector3()},
      rippleCenter:{value:new T.Vector2(1000,1000)},rippleStart:{value:-100},
      lightLevel:{value:.4}
    };
    const material=new T.ShaderMaterial({uniforms,vertexShader:`
      uniform mat4 textureMatrix;
      varying vec4 vReflection; varying vec3 vWorld;
      void main(){vec4 world=modelMatrix*vec4(position,1.);vWorld=world.xyz;
        vReflection=textureMatrix*world;gl_Position=projectionMatrix*viewMatrix*world;}
    `,fragmentShader:`
      uniform sampler2D reflection;uniform float time;uniform vec3 tint;uniform vec3 eye;
      uniform vec2 rippleCenter;uniform float rippleStart;uniform float lightLevel;
      varying vec4 vReflection;varying vec3 vWorld;
      void main(){
        vec2 p=vWorld.xz;float t=time;
        vec2 waves=vec2(sin(p.x*2.7+p.y*1.4+t*1.1)+sin(p.y*5.1-t*.9)*.35,
          cos(p.y*3.6+p.x*.7-t*1.2)+sin(p.x*7.3+t)*.20);
        float age=max(0.,t-rippleStart),dist=distance(p,rippleCenter);
        float ring=sin(dist*7.-age*9.)*exp(-pow(dist-age*2.5,2.)*.8)*exp(-age*.9);
        waves+=normalize(p-rippleCenter+vec2(.001))*ring*2.;
        vec2 uv=vReflection.xy/vReflection.w;
        uv+=waves*.0013;
        vec3 reflected=texture2D(reflection,clamp(uv,vec2(.002),vec2(.998))).rgb;
        reflected=mix(reflected,vec3(dot(reflected,vec3(.2126,.7152,.0722))),.12);
        reflected*=mix(.65,.88,clamp(lightLevel/3.,0.,1.));
        float fresnel=pow(1.-clamp(normalize(eye-vWorld).y,0.,1.),2.);
        vec3 color=mix(tint*.50,reflected,.35+.40*fresnel);
        float glint=pow(max(0.,sin(p.x*2.+p.y*14.+t)*cos(p.y*8.-t*.7)),14.);
        color+=vec3(.33,.40,.34)*glint*.025*lightLevel;
        color+=vec3(.16,.22,.20)*abs(ring)*.22;
        gl_FragColor=vec4(color,1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `});
    const mesh=new T.Mesh(new T.PlaneGeometry(220,280),material);mesh.rotation.x=-Math.PI/2;mesh.position.set(0,.025,-35);mesh.name='interactive-reflective-water';
    const look=new T.Vector3(),direction=new T.Vector3();
    let disposed=false;
    return {mesh,uniforms,
      resize(width,height){target.setSize(Math.min(640,Math.max(256,Math.round(width*.5))),Math.min(384,Math.max(192,Math.round(height*.5))));},
      renderReflection(scene,camera){
        if(disposed)return;
        camera.updateMatrixWorld();camera.getWorldDirection(direction);
        look.copy(camera.position).add(direction);look.y=-look.y;
        mirror.copy(camera);mirror.position.copy(camera.position);mirror.position.y=-camera.position.y;
        mirror.up.set(0,-1,0);mirror.lookAt(look);mirror.updateMatrixWorld();
        textureMatrix.copy(bias).multiply(mirror.projectionMatrix).multiply(mirror.matrixWorldInverse);
        const oldTarget=renderer.getRenderTarget(),oldPlanes=renderer.clippingPlanes,oldAuto=renderer.shadowMap.autoUpdate;
        mesh.visible=false;renderer.clippingPlanes=[new T.Plane(new T.Vector3(0,1,0),-.03)];renderer.shadowMap.autoUpdate=false;
        try{renderer.setRenderTarget(target);renderer.clear();renderer.render(scene,mirror);}
        finally{renderer.setRenderTarget(oldTarget);renderer.clippingPlanes=oldPlanes;renderer.shadowMap.autoUpdate=oldAuto;mesh.visible=true;}
      },
      update(seconds,camera){uniforms.time.value=seconds;uniforms.eye.value.copy(camera.position);},
      hit(point,seconds){uniforms.rippleCenter.value.set(point.x,point.z);uniforms.rippleStart.value=seconds;},
      setTime(tint,level){uniforms.tint.value.set(tint);uniforms.lightLevel.value=level;},
      dispose(){disposed=true;target.dispose();mesh.geometry.dispose();material.dispose();}
    };
  }
  window.FenghuangBridgeWater=Object.freeze({create});
})();
