/* Exterior study based on the supplied Hongqiao photograph; dimensions are artistic.
 * Repeated beams, latticework, tiles and lanterns share instanced geometry.
 */
(() => {
  'use strict';
  async function create(T) {
    const root = new T.Group(); root.name = 'hongqiao-exterior';
    const textures = {}, missingAssets = [], loader = new T.TextureLoader();
    await Promise.all(['stone', 'wood', 'tile', 'plaster'].flatMap(name => ['', '-bump'].map(async suffix => {
      const key = name + suffix;
      try {
        const texture = await loader.loadAsync(`assets/bridge/${key}.webp`);
        texture.wrapS = texture.wrapT = T.RepeatWrapping;
        if (!suffix) texture.colorSpace = T.SRGBColorSpace;
        texture.anisotropy = 4; textures[key] = texture;
      } catch (_) { missingAssets.push(key); }
    })));
    const material = (name, color, bump = .1) => new T.MeshStandardMaterial({
      color, map: textures[name] || null, bumpMap: textures[name + '-bump'] || null,
      bumpScale: bump, roughness: .88, metalness: 0
    });
    const mats = {
      stone: material('stone', '#c1c2be', .09), arch: material('stone', '#d1cebf', .08),
      wood: material('wood', '#b89977', .06), red: material('wood', '#b95e43', .025),
      dark: material('wood', '#65503e', .035), tile: material('tile', '#b2b7b5', .08),
      plaster: material('plaster', '#aab6b2', .035), trim: material('plaster', '#e7ded0', .03),
      black: new T.MeshStandardMaterial({color:'#191b18',roughness:1}),
      window: new T.MeshStandardMaterial({color:'#655342',roughness:.72,emissive:'#ff860f',emissiveIntensity:0}),
      lamp: new T.MeshStandardMaterial({color:'#cd702f',roughness:.75,emissive:'#ff7e0e',emissiveIntensity:0}),
      path: material('stone', '#87897b', .05),
      leaf: new T.MeshStandardMaterial({color:'#354d38',roughness:1}),
    };
    try{textures['window-glow']=await loader.loadAsync('assets/bridge/window-glow.webp');mats.window.emissiveMap=textures['window-glow'];}
    catch(_){missingAssets.push('window-glow');}
    try{textures.foliage=await loader.loadAsync('assets/bridge/foliage.webp');textures.foliage.colorSpace=T.SRGBColorSpace;textures.foliage.wrapS=textures.foliage.wrapT=T.RepeatWrapping;textures.foliage.repeat.set(8,5);}
    catch(_){missingAssets.push('foliage');}
    mats.tile.side = T.DoubleSide;
    const batches = new Map(), boxGeometry = new T.BoxGeometry(1, 1, 1);
    const unitCylinder = new T.CylinderGeometry(1,1,1,8);
    const dummy = new T.Object3D();
    function instance(geometry, mat, pos, scale, rotation = [0,0,0]) {
      const key = `${geometry.uuid}:${mat.uuid}`;
      if (!batches.has(key)) batches.set(key, {geometry, mat, matrices:[]});
      dummy.position.set(...pos); dummy.scale.set(...scale); dummy.rotation.set(...rotation); dummy.updateMatrix();
      batches.get(key).matrices.push(dummy.matrix.clone());
    }
    function box(mat, w,h,d,x,y,z, angle = 0) { instance(boxGeometry,mat,[x,y,z],[w,h,d],[0,angle,0]); }
    function cylinder(mat, radius,height,x,y,z) {instance(unitCylinder,mat,[x,y,z],[radius,height,radius]);}
    function mesh(geometry, mat, name) {
      const obj = new T.Mesh(geometry,mat); obj.name=name || '';obj.castShadow=true;obj.receiveShadow=true;root.add(obj);return obj;
    }
    function stoneUV(geometry) {
      const pos=geometry.attributes.position, normal=geometry.attributes.normal, uv=geometry.attributes.uv;
      for(let i=0;i<pos.count;i++) {
        if(Math.abs(normal.getZ(i))>.5) uv.setXY(i,pos.getX(i)/3.3,pos.getY(i)/2.2);
        else uv.setXY(i,(Math.abs(normal.getX(i))>.5?pos.getZ(i):pos.getX(i))/3.3,pos.getY(i)/2.2+pos.getZ(i)/3);
      }
      uv.needsUpdate=true;return geometry;
    }
    // A continuous extruded wall with three open archways, not applied arch decorations.
    const shape=new T.Shape();shape.moveTo(-20,0);
    for(const center of [-12,0,12]) {
      shape.lineTo(center-5,0);shape.lineTo(center-5,1.15);
      for(let i=0;i<=40;i++){const a=Math.PI-i*Math.PI/40;shape.lineTo(center+5*Math.cos(a),1.15+5*Math.sin(a));}
      shape.lineTo(center+5,0);
    }
    shape.lineTo(20,0);shape.lineTo(20,7.6);shape.lineTo(-20,7.6);shape.closePath();
    const wall=mesh(stoneUV(new T.ExtrudeGeometry(shape,{depth:6.6,bevelEnabled:false,curveSegments:40})),mats.stone,'three-open-stone-arches');
    wall.position.z=-3.3;
    // Individual voussoirs form a shallow arch ring on both elevations.
    for(const center of [-12,0,12]) for(const side of [-1,1]) for(let i=0;i<25;i++) {
      const a0=i*Math.PI/25+.006,a1=(i+1)*Math.PI/25-.006,s=new T.Shape();
      const point=(r,a)=>[center+r*Math.cos(a),1.15+r*Math.sin(a)];
      s.moveTo(...point(5,a0));s.lineTo(...point(5.44,a0));s.lineTo(...point(5.44,a1));s.lineTo(...point(5,a1));s.closePath();
      const g=new T.ExtrudeGeometry(s,{depth:.10,bevelEnabled:false});
      // Merge-compatible pieces are instanced individually only once per shape.
      const m=mesh(stoneUV(g),mats.arch);m.position.z=side>0?3.31:-3.41;
    }
    for(const x of [-6,6]) {
      for(const side of [-1,1]){
        const g=new T.CylinderGeometry(.95,1.22,5.50,16);
        const uv=g.attributes.uv;for(let i=0;i<uv.count;i++)uv.setXY(i,uv.getX(i)*2,uv.getY(i)*2.5);
        const p=mesh(g,mats.stone,'rounded-pier-front');p.position.set(x,2.75,side*3.30);
      }
      // The upstream/downstream pointed cutwaters and battered pier bases.
      for(const side of [-1,1]) {
        const s=new T.Shape();s.moveTo(x-1.04,side*3.25);s.lineTo(x+1.04,side*3.25);s.lineTo(x,side*4.35);s.closePath();
        const g=new T.ExtrudeGeometry(s,{depth:5.45,bevelEnabled:false});g.rotateX(Math.PI/2);g.translate(0,5.45,0);
        mesh(stoneUV(g),mats.stone,'pier-cutwater');
      }
    }
    box(mats.arch,40.6,.20,7.0,0,7.55,0);
    box(mats.dark,40.1,.36,7.05,0,7.85,0);
    box(mats.wood,36.2,.16,6.4,0,8.08,0);
    box(mats.wood,36.2,.22,6.4,0,11.28,0);
    // Longitudinal beams, sill rails and detailed gallery bays.
    for(const side of [-1,1]) {
      for(const y of [8.27,9.00,10.88,11.5,12.22,14.13]) box(mats.wood,35.6,.12,.17,0,y,side*3.20);
      for(const y of [8.18,11.20,14.28]) box(mats.dark,36.3,.27,.30,0,y,side*3.12);
      for(let bay=0;bay<22;bay++) {
        const x=-16.8+bay*1.6;
        for(const y of [9.55,12.72]) {
          cylinder(mats.red,.105,3.10,x,y,side*3.13);
          box(mats.trim,.22,.12,.22,x,y-1.46,side*3.13);
          box(mats.red,.34,.10,.35,x,y+1.20,side*3.13);
        }
        if(bay===21)continue;
        const cx=x+.8;
        for(const floor of [0,1]) {
          const y=9.48+floor*3.16;
          const open=(bay+floor)%5===1;
          box(open?mats.black:mats.window,1.39,1.78,.075,cx,y+.18,side*2.96);
          box(mats.wood,1.40,.64,.12,cx,y-1.02,side*3.02);
          for(const offset of [-.68,.68])box(mats.dark,.065,1.85,.16,cx+offset,y+.18,side*3.07);
          for(const dy of [-.70,1.08])box(mats.wood,1.42,.065,.17,cx,y+dy,side*3.07);
          if(!open){
            for(let k=1;k<7;k++)box(mats.wood,.025,1.73,.08,cx-.7+k*.2,y+.18,side*3.1);
            for(let k=1;k<5;k++)box(mats.wood,1.36,.024,.08,cx,y-.70+k*.35,side*3.1);
          }
          // A genuine gallery balustrade in front of the recessed windows.
          for(let k=0;k<7;k++)box(mats.dark,.035,.64,.045,cx-.61+k*.20,y-.98,side*3.38);
          box(mats.wood,1.53,.075,.11,cx,y-.63,side*3.38);
        }
      }
    }
    // Cross-beams visible from the inside camera stop.
    for(let x=-16.8;x<=17;x+=3.2) {
      box(mats.dark,.22,.26,6.35,x,10.97,0);box(mats.dark,.20,.24,6.35,x,14.10,0);
    }
    function roof(length, halfDepth, height, centerX=0, centerZ=0, slope=1.7, from=0) {
      const nx=Math.ceil(length*2),nz=12;
      for(const side of [-1,1]) {
        const positions=[],uvs=[],indices=[];
        const point=(x,t)=>[centerX+x,height-slope*t+.40*t**7+.42*(Math.abs(x)/(length/2))**12,centerZ+side*halfDepth*t];
        for(let ix=0;ix<=nx;ix++)for(let iz=0;iz<=nz;iz++) {
          const x=-length/2+ix*length/nx,t=from+(1-from)*iz/nz;
          positions.push(...point(x,t));uvs.push(x/4,t*halfDepth/3);
        }
        for(let ix=0;ix<nx;ix++)for(let iz=0;iz<nz;iz++) {
          const a=ix*(nz+1)+iz,b=a+nz+1;
          indices.push(a,b,a+1,b,b+1,a+1);
        }
        const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(positions,3));g.setAttribute('uv',new T.Float32BufferAttribute(uvs,2));g.setIndex(indices);g.computeVertexNormals();
        mesh(g,mats.tile,'curved-tile-roof');
        // The edge tiles have actual thickness and curved ends in silhouette.
        for(let x=-length/2;x<=length/2;x+=.27) {
          const p=point(x,1);
          instance(unitCylinder,mats.tile,[p[0],p[1]-.035,p[2]],[.085,.33,.085],[Math.PI/2,0,0]);
        }
        for(const x of [-length/2,length/2]) {
          const points=[];
          for(let i=0;i<=24;i++)points.push(new T.Vector3(...point(x,from+(1-from)*i/24)).add(new T.Vector3(0,.07,0)));
          mesh(new T.TubeGeometry(new T.CatmullRomCurve3(points),24,.09,5,false),mats.trim,'roof-end-ridge');
        }
      }
      if(from===0)box(mats.tile,length+.10,.20,.24,centerX,height+.04,centerZ);
    }
    roof(37.4,4.12,15.85);
    roof(37.2,4.18,12.28,0,0,1.8,.69);
    // Modest central clerestory, not a tall pagoda.
    box(mats.plaster,10.5,1.05,3.7,0,16.1,0);
    for(const side of [-1,1])for(let x=-4.7;x<=4.8;x+=1.55){
      box(mats.dark,1.32,.60,.09,x,16.15,side*1.88);
      for(let k=0;k<7;k++)box(mats.wood,.035,.55,.07,x-.55+k*.18,16.15,side*1.95);
      box(mats.trim,.10,.91,.12,x-.7,16.12,side*1.96);
    }
    roof(12.6,2.72,18.10,0,0,1.45);
    // Grey enclosed ends, with white window surrounds matching the reference.
    for(const x of [-18.65,18.65]) {
      box(mats.plaster,2.85,6.65,6.6,x,11.35,0);
      for(const side of [-1,1])for(const y of [9.45,12.85]) {
        box(mats.trim,1.67,1.32,.10,x,y,side*3.35);
        box(mats.window,1.39,1.04,.11,x,y,side*3.42);
        for(let k=-3;k<=3;k++)box(mats.wood,.045,1.04,.08,x+k*.18,y,side*3.5);
      }
      for(const side of [-1,1])for(const dx of [-1.32,1.32])box(mats.trim,.10,6.6,.10,x+dx,11.35,side*3.35);
      roof(3.65,3.9,15.86,x,0,1.6);
    }
    // Ground and riverbanks frame a navigable river corridor, not a full town reconstruction.
    for(const side of [-1,1]) {
      box(mats.stone,11,2.4,112,side*26,-.05,-27);
      box(mats.path,11,.25,112,side*26,1.28,-27);
      for(let i=0;i<8;i++) {
        const z=12-i*9, x=side*(26.2+(i%3)*.8), h=7.0+(i%3)*1.05;
        box(mats.wood,6,h,6.9,x,h/2+2,z);
        box(mats.dark,6.2,.25,7.1,x,2.0+h*.52,z);
        for(const sx of [-2.5,2.5])for(const sz of [-2.7,2.7])cylinder(mats.dark,.10,3.4,x+sx,1.8,z+sz);
        // Open river-facing gallery with lattice windows and pillars.
        for(let j=0;j<4;j++) {
          const zz=z-2.5+j*1.66;
          for(const y of [4.0,7.0]) {
            box(mats.window,.10,1.5,1.24,x-side*3.04,y,zz);
            box(mats.dark,.17,1.8,.09,x-side*3.12,y,zz-.65);
            for(let k=0;k<5;k++)box(mats.wood,.12,1.5,.035,x-side*3.15,y,zz-.51+k*.25);
          }
        }
        roof(7,4.3,h+3.5,x,z,1.7);
      }
    }
    // Distant terrain: low-cost continuous surface with subtle vertex variation.
    const terrain=new T.PlaneGeometry(210,105,100,50);terrain.rotateX(-Math.PI/2);terrain.translate(0,0,-107);
    const tp=terrain.attributes.position, colors=[];
    for(let i=0;i<tp.count;i++) {
      const x=tp.getX(i),z=tp.getZ(i);
      const peak=48*Math.exp(-((x+20)**2/1800+(z+105)**2/1300))+34*Math.exp(-((x-50)**2/1100+(z+132)**2/1000));
      const n=(Math.sin(x*.28+z*.12)+Math.cos(z*.33-x*.14))*.9;
      const edge=Math.min(1,Math.max(0,(-z-54)/23));tp.setY(i,Math.max(-2,(peak+n-3)*edge-.5));
      const c=new T.Color('#93a68a').multiplyScalar(.85+(Math.sin(x*3+z*5)+1)*.12);colors.push(c.r,c.g,c.b);
    }
    terrain.setAttribute('color',new T.Float32BufferAttribute(colors,3));terrain.computeVertexNormals();
    const tm=new T.MeshStandardMaterial({vertexColors:true,map:textures.foliage||null,roughness:1});mesh(terrain,tm,'distant-hills');
    // Hanging lanterns are one instanced draw, with luminous cores and timber caps.
    const lanternGeo=new T.SphereGeometry(1,10,7);
    for(const side of [-1,1])for(let x=-16;x<=16;x+=3.2)for(const y of [10.50,13.70]) {
      instance(lanternGeo,mats.lamp,[x,y,side*3.5],[.15,.26,.15]);
      box(mats.dark,.22,.06,.22,x,y+.25,side*3.5);
      cylinder(mats.dark,.015,.27,x,y+.41,side*3.5);
      box(mats.red,.15,.045,.15,x,y-.25,side*3.5);
      cylinder(mats.red,.018,.16,x,y-.35,side*3.5);
    }
    const boats=[];
    for(const [x,z,angle] of [[-7,22,-.3],[8,15,.35]]) {
      const boat=new T.Group();boat.position.set(x,.22,z);boat.rotation.y=angle;root.add(boat);
      const outline=new T.Shape();outline.moveTo(-2.3,0);outline.quadraticCurveTo(-1.7,.8,1.8,.55);outline.lineTo(2.5,0);outline.quadraticCurveTo(1.7,-.8,-1.8,-.55);outline.closePath();
      const hull=new T.ExtrudeGeometry(outline,{depth:.30,bevelEnabled:true,bevelSize:.06,bevelThickness:.08,bevelSegments:1});hull.rotateX(-Math.PI/2);
      const hm=new T.Mesh(hull,mats.dark);boat.add(hm);
      const pole=new T.Mesh(new T.CylinderGeometry(.025,.025,1.65,6),mats.dark);pole.position.set(1.3,1,0);boat.add(pole);
      const lamp=new T.Mesh(lanternGeo,mats.lamp);lamp.scale.set(.16,.23,.16);lamp.position.set(1.3,1.65,0);boat.add(lamp);
      const body=new T.Mesh(new T.CylinderGeometry(.19,.30,.70,7),mats.black);body.position.set(-.45,.68,0);boat.add(body);
      const head=new T.Mesh(new T.SphereGeometry(.18,8,6),mats.black);head.position.set(-.45,1.16,0);boat.add(head);
      const hat=new T.Mesh(new T.ConeGeometry(.37,.18,10),mats.wood);hat.position.set(-.45,1.36,0);boat.add(hat);
      boats.push(boat);
    }
    // Merge static geometry by material: arch stones and individual roof meshes
    // must not each cost a separate draw in the main, reflection and shadow passes.
    const staticGroups=new Map();
    for(const child of [...root.children]){
      if(!child.isMesh||child.geometry.attributes.color)continue;
      if(!staticGroups.has(child.material))staticGroups.set(child.material,[]);
      staticGroups.get(child.material).push(child);
    }
    for(const [mat,objects] of staticGroups){
      if(objects.length<2)continue;
      const positions=[],normals=[],uvs=[];
      for(const obj of objects){
        obj.updateMatrix();const g=obj.geometry.index?obj.geometry.toNonIndexed():obj.geometry.clone();g.applyMatrix4(obj.matrix);
        positions.push(...g.attributes.position.array);normals.push(...g.attributes.normal.array);
        if(g.attributes.uv)uvs.push(...g.attributes.uv.array);else uvs.push(...new Array(g.attributes.position.count*2).fill(0));
        g.dispose();obj.geometry.dispose();root.remove(obj);
      }
      const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.Float32BufferAttribute(positions,3));
      geometry.setAttribute('normal',new T.Float32BufferAttribute(normals,3));geometry.setAttribute('uv',new T.Float32BufferAttribute(uvs,2));
      mesh(geometry,mat,'merged-static-architecture');
    }
    // Consolidate all repeated members after geometry construction.
    let instanceCount=0;
    for(const {geometry,mat,matrices} of batches.values()) {
      const m=new T.InstancedMesh(geometry,mat,matrices.length);
      matrices.forEach((matrix,i)=>m.setMatrixAt(i,matrix));m.instanceMatrix.needsUpdate=true;
      m.castShadow=true;m.receiveShadow=true;m.computeBoundingSphere();root.add(m);instanceCount+=matrices.length;
    }
    root.updateMatrixWorld(true);
    return {root,boats,materials:mats,textures,missingAssets,instanceCount,archCount:3,
      setLights(level){mats.window.emissiveIntensity=level*1.1;mats.lamp.emissiveIntensity=level*.95;},
      update(seconds){boats.forEach((b,i)=>{b.position.y=.22+Math.sin(seconds*.85+i*2)*.035;b.rotation.z=Math.sin(seconds*.64+i)*.012;});}
    };
  }
  window.FenghuangBridgeModel=Object.freeze({create});
})();
