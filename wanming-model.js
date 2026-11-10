/* Seven-storey hexagonal exterior study. Dimensions/unseen faces are artistic.
 * All openings, eaves and recessed windows are geometry; no tower-image backdrop.
 */
(() => {
  'use strict';
  async function create(T) {
    const root=new T.Group();root.name='wanming-seven-storey-exterior';
    const textures={},missingAssets=[],loader=new T.TextureLoader();
    await Promise.all(['brick','brick-bump','tree','tile','tile-bump','plaster','plaster-bump','wood','wood-bump','foliage','window-glow'].map(async name=>{
      try {const t=await loader.loadAsync(`assets/${name.startsWith('brick')||name==='tree'?'wanming':'bridge'}/${name}.webp`);
        t.wrapS=t.wrapT=T.RepeatWrapping;t.anisotropy=4;if(!name.endsWith('bump'))t.colorSpace=T.SRGBColorSpace;textures[name]=t;
      }catch(_){missingAssets.push(name);}
    }));
    const mat=(key,color,bump=.045)=>new T.MeshStandardMaterial({color,map:textures[key]||null,bumpMap:textures[key+'-bump']||null,bumpScale:bump,roughness:.88});
    const mats={brick:mat('brick','#ced0c9'),stone:mat('brick','#a8aaa3'),trim:mat('plaster','#f0e6d0'),tile:mat('tile','#a1afb0'),wood:mat('wood','#a28a6b'),dark:mat('wood','#635c50'),panel:mat('plaster','#55798b'),leaf:mat('foliage','#719179'),
      window:new T.MeshStandardMaterial({color:'#30281b',emissive:'#ff9a27',emissiveMap:textures['window-glow']||null,roughness:.8}),
      lamp:new T.MeshStandardMaterial({color:'#bc6027',emissive:'#ff9d36',roughness:.7}),
      glow:new T.MeshStandardMaterial({color:'#e8bb73',emissive:'#ffc06b',roughness:.75})};
    mats.tile.side=T.DoubleSide;
    const batches=new Map(),staticGroups=new Map(),dummy=new T.Object3D(),boxGeo=new T.BoxGeometry(1,1,1),cylGeo=new T.CylinderGeometry(1,1,1,8),tileGeo=new T.CylinderGeometry(1,1,1,6,1,true);
    function instance(g,m,pos,scale,rotation=[0,0,0]){
      const key=g.uuid+':'+m.uuid;if(!batches.has(key))batches.set(key,{g,m,matrices:[]});
      dummy.position.set(...pos);dummy.scale.set(...scale);dummy.rotation.set(...rotation);dummy.updateMatrix();batches.get(key).matrices.push(dummy.matrix.clone());
    }
    function box(m,w,h,d,x,y,z,angle=0){instance(boxGeo,m,[x,y,z],[w,h,d],[0,angle,0]);}
    // Bake unique static pieces directly into material buffers; shared parts stay instanced.
    function mesh(g,m,pos=[0,0,0],angle=0){
      dummy.position.set(...pos);dummy.scale.set(1,1,1);dummy.rotation.set(0,angle,0);dummy.updateMatrix();
      const n=g.index?g.toNonIndexed():g.clone();n.applyMatrix4(dummy.matrix);
      if(!staticGroups.has(m))staticGroups.set(m,{p:[],n:[],uv:[]});const a=staticGroups.get(m);
      for(const v of n.attributes.position.array)a.p.push(v);for(const v of n.attributes.normal.array)a.n.push(v);
      for(const v of n.attributes.uv?.array||new Array(n.attributes.position.count*2).fill(0))a.uv.push(v);
      n.dispose();g.dispose();
    }
    function uvWorld(g){const p=g.attributes.position,u=g.attributes.uv;for(let i=0;i<p.count;i++)u.setXY(i,p.getX(i)/2.8,p.getY(i)/2.8+p.getZ(i)/3);return g;}
    function hex(radius,height,y,m){mesh(new T.CylinderGeometry(radius,radius,height,6),m,[0,y,0],Math.PI/6);}
    function facadeBox(m,w,h,d,x,y,z,angle){const sin=Math.sin(angle),cos=Math.cos(angle);box(m,w,h,d,x*cos+z*sin,y,z*cos-x*sin,angle);}
    function archPath(path,r,sill,spring){path.moveTo(-r,sill);path.lineTo(-r,spring);for(let i=0;i<=20;i++){const a=Math.PI-i*Math.PI/20;path.lineTo(r*Math.cos(a),spring+r*Math.sin(a));}path.lineTo(r,sill);path.closePath();return path;}
    function tube(points,r,m){mesh(new T.TubeGeometry(new T.CatmullRomCurve3(points),20,r,5,false),m);}
    function eave(radius,y,top=false){
      const outer=radius+(top?.46:.62),inner=top?.10:radius-.24,steps=8,across=12,roofHeight=top?2.3:.53;
      for(let face=0;face<6;face++){
        const angle=face*Math.PI/3,positions=[],uv=[],indices=[];
        function point(u,v){const rr=inner+(outer-inner)*v,xx=rr*u,zz=rr*Math.sqrt(3)/2;
          const yy=y+roofHeight*Math.pow(1-v,1.65)+.20*Math.pow(v,8)+.25*Math.pow(Math.abs(u)*2,7)*v*v;
          return new T.Vector3(xx*Math.cos(angle)+zz*Math.sin(angle),yy,zz*Math.cos(angle)-xx*Math.sin(angle));}
        for(let j=0;j<=steps;j++)for(let i=0;i<=across;i++){positions.push(...point(i/across-.5,j/steps).toArray());uv.push(i/across*radius*1.9,j/steps*(top?3:1.4));}
        for(let j=0;j<steps;j++)for(let i=0;i<across;i++){const a=j*(across+1)+i,b=a+across+1;indices.push(a,b,a+1,b,b+1,a+1);}
        const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(positions,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(indices);g.computeVertexNormals();mesh(g,mats.tile);
        // Curved ridges and separately modelled barrel-tile ends silhouette the roof.
        tube([0,.3,.65,.9,1].map(v=>point(.5,v)),.065,mats.trim);
        tube([-.5,-.25,0,.25,.5].map(u=>point(u,1)),.065,mats.dark);
        for(let i=0;i<=Math.round(outer/.14);i++){const p=point(i/Math.round(outer/.14)-.5,1);instance(tileGeo,mats.tile,p.toArray(),[.065,.24,.065],[Math.PI/2,0,-angle]);}
        for(const side of [-1,1]){const p=point(side*.5,1);tube([p.clone().add(new T.Vector3(0,-.02,0)),p.clone().add(new T.Vector3(Math.sin(angle+side*.5)*.12,.25,Math.cos(angle+side*.5)*.12)),p.clone().add(new T.Vector3(Math.sin(angle+side*.5)*.2,.52,Math.cos(angle+side*.5)*.2))],.045,mats.dark);}
      }
    }
    hex(3.65,.30,.35,mats.stone);hex(3.48,.24,.62,mats.trim);hex(3.28,.35,.90,mats.stone);
    const structure=[[3.1,4.3],[2.8,3.2],[2.55,2.7],[2.32,2.35],[2.1,2.05],[1.91,1.8],[1.75,1.6]];
    const levels=[];let y=1.08,windowOpeningCount=0;
    structure.forEach(([r,h],floor)=>{
      const z=r*Math.sqrt(3)/2,sill=floor===0?0:h*.18,wr=Math.min(r*.20,h*.23),spring=floor===0?2.45:h*.60;
      levels.push({floor:floor+1,bottom:y,top:y+h,radius:r,faces:6,openings:0});
      for(let face=0;face<6;face++){
        const angle=face*Math.PI/3,wall=new T.Shape();
        if(floor===0){wall.moveTo(-r/2,0);wall.lineTo(-wr,0);wall.lineTo(-wr,spring);for(let i=0;i<=20;i++){const a=Math.PI-i*Math.PI/20;wall.lineTo(wr*Math.cos(a),spring+wr*Math.sin(a));}wall.lineTo(wr,0);wall.lineTo(r/2,0);}
        else {wall.moveTo(-r/2,0);wall.lineTo(r/2,0);wall.holes.push(archPath(new T.Path(),wr,sill,spring));}
        wall.lineTo(r/2,h);wall.lineTo(-r/2,h);wall.closePath();
        const wg=new T.ExtrudeGeometry(wall,{depth:.32,bevelEnabled:false,curveSegments:20});wg.translate(0,0,-.32);
        mesh(uvWorld(wg),mats.brick,[Math.sin(angle)*z,y,Math.cos(angle)*z],angle);windowOpeningCount++;levels[floor].openings++;
        // Recessed luminous backing, visible reveals and an individual pale arch ring.
        const backing=new T.ShapeGeometry(archPath(new T.Shape(),wr*.98,sill,spring));mesh(backing,mats.window,[Math.sin(angle)*(z-.38),y,Math.cos(angle)*(z-.38)],angle);
        const ring=new T.Shape();const trim=.13;
        ring.moveTo(-wr-trim,sill);ring.lineTo(-wr-trim,spring);
        for(let i=0;i<=20;i++){const a=Math.PI-i*Math.PI/20;ring.lineTo((wr+trim)*Math.cos(a),spring+(wr+trim)*Math.sin(a));}
        ring.lineTo(wr+trim,sill);ring.lineTo(wr,sill);ring.lineTo(wr,spring);
        for(let i=0;i<=20;i++){const a=i*Math.PI/20;ring.lineTo(wr*Math.cos(a),spring+wr*Math.sin(a));}ring.lineTo(-wr,sill);ring.closePath();
        mesh(new T.ExtrudeGeometry(ring,{depth:.075,bevelEnabled:false}),mats.trim,[Math.sin(angle)*(z+.012),y,Math.cos(angle)*(z+.012)],angle);
        for(const side of [-1,1])facadeBox(mats.trim,.14,h,.13,side*(r/2-.10),y+h/2,z+.035,angle);
        if(floor<4){facadeBox(mats.trim,r*.67,.42,.09,0,y+h-.36,z+.035,angle);facadeBox(mats.panel,r*.57,.28,.11,0,y+h-.36,z+.05,angle);}
        facadeBox(mats.trim,r,.12,.15,0,y+.08,z+.045,angle);
        // Narrow inner mullions remain behind the face so the opening has visible depth.
        for(const x of [-wr*.45,0,wr*.45])facadeBox(mats.dark,.035,spring-sill,.055,x,y+(spring+sill)/2,z-.31,angle);
        for(let j=0;j<5;j++){
          const xx=(j-2)*r/5.5;facadeBox(mats.trim,.11,.23,.29,xx,y+h+.1,z+.08,angle);
          facadeBox(mats.dark,.21,.07,.40,xx,y+h+.20,z+.12,angle);
        }
        facadeBox(mats.glow,r*.87,.025,.045,0,y+h+.27,z+.13,angle);
      }
      hex(r+.12,.16,y+h+.11,mats.trim);hex(r+.18,.12,y+h+.25,mats.panel);
      // Solid concealed floor/cornice core prevents sky showing through between
      // stacked storeys when the camera approaches the underside of an eave.
      hex(r-.20,floor===6?.12:.56,y+h+(floor===6?.33:.53),mats.brick);
      eave(r,y+h+.29,floor===6);
      y+=h+.72;
    });
    const top=levels[6].top+.29+2.3;
    hex(.18,.10,top+.08,mats.trim);
    mesh(new T.CylinderGeometry(.07,.15,.48,10),mats.dark,[0,top+.34,0]);
    mesh(new T.SphereGeometry(.13,10,8),mats.trim,[0,top+.63,0]);
    mesh(new T.ConeGeometry(.085,.48,8),mats.dark,[0,top+.94,0]);
    // Connected rocky riverbank: the tower is never placed on an isolated river island.
    function ground(w,h,d,x,y,z){const g=new T.BoxGeometry(w,h,d),p=g.attributes.position,n=g.attributes.normal,u=g.attributes.uv;
      for(let i=0;i<p.count;i++)u.setXY(i,(Math.abs(n.getX(i))>.5?p.getZ(i):p.getX(i))/3,(Math.abs(n.getY(i))>.5?p.getZ(i):p.getY(i))/3);
      mesh(g,mats.stone,[x,y,z]);}
    ground(130,2,75,0,-.4,-36);ground(52,.35,8,0,1.0,-4.7);
    const rockGeo=new T.DodecahedronGeometry(1,0);
    for(let i=0;i<88;i++){const x=-62+i*1.45,z=1.2+Math.sin(i*.64)*.55;
      instance(rockGeo,mats.stone,[x,.25,z],[.9+(i%3)*.27,.55+(i%4)*.18,.7+(i%5)*.13],[i*.3,i*.7,i*.2]);}
    for(let i=0;i<8;i++)box(mats.stone,2.8,.19,1.1,5.4,.15+i*.16,4.6-i*.62);
    // Timber waterfront buildings with open railings, tiled gables and warm windows.
    let lanternGeometry;
    for(let house=0;house<7;house++){
      const x=house<4?10+house*8:-12-(house-4)*9,z=-7-(house%2)*4,h=7+(house%3)*1.1,w=7;
      box(mats.wood,w,h,5,x,h/2+1.15,z);
      for(const yy of [2.7,5.3,7.9]){
        if(yy>h)continue;
        box(mats.dark,w+.4,.16,1.4,x,yy-.75,z+3);
        for(let j=0;j<9;j++){const xx=x-w/2+.4+j*.78;
          box(mats.window,.52,1.05,.06,xx,yy+.2,z+2.54);
          box(mats.dark,.07,2.35,.15,xx,yy+.15,z+3.5);
          box(mats.wood,.06,.7,.09,xx,yy-.32,z+3.65);
        }
        for(const dy of [-.65,.04])box(mats.wood,w+.3,.07,.10,x,yy+dy,z+3.65);
        box(mats.glow,w,.025,.04,x,yy+1.25,z+2.7);
      }
      for(const side of [-1,1]){
        const g=new T.PlaneGeometry(w+1.4,3.8,6,6);g.rotateX(-Math.PI/2);
        const p=g.attributes.position,uv=g.attributes.uv;
        for(let i=0;i<p.count;i++){const zz=p.getZ(i)+1.9;p.setXYZ(i,p.getX(i),h+2.7-zz*.45+.13*Math.pow(Math.abs(p.getX(i))/(w/2+.7),6),side*zz);uv.setXY(i,uv.getX(i)*9,uv.getY(i)*3);}g.computeVertexNormals();mesh(g,mats.tile,[x,0,z]);
      }
      box(mats.dark,w+1,.15,.16,x,h+2.75,z);
      for(let j=0;j<4;j++){const xx=x-2.7+j*1.8;instance(newLantern(),mats.lamp,[xx,5.95,z+3.8],[.17,.26,.17]);}
    }
    function newLantern(){return lanternGeometry||(lanternGeometry=new T.SphereGeometry(1,10,7));}
    for(let i=-24;i<25;i++){if(Math.abs(i)<4)continue;const x=i*2.1;
      box(mats.wood,.12,1.1,.12,x,1.7,-.5);box(mats.wood,2.1,.08,.1,x+1,2.12,-.5);box(mats.wood,2.1,.08,.1,x+1,1.52,-.5);}
    const terrain=new T.PlaneGeometry(260,150,100,60);terrain.rotateX(-Math.PI/2);terrain.translate(0,0,-100);
    const tp=terrain.attributes.position,tu=terrain.attributes.uv;
    for(let i=0;i<tp.count;i++){const x=tp.getX(i),z=tp.getZ(i),edge=Math.min(1,Math.max(0,(-z-28)/24));
      const peak=36*Math.exp(-((x+29)**2/2200+(z+79)**2/1500))+39*Math.exp(-((x-65)**2/1600+(z+121)**2/1600));
      tp.setY(i,(peak+Math.sin(x*.4+z*.25)*1.5+Math.cos(z*.6)*.7)*edge-2);tu.setXY(i,tu.getX(i)*12,tu.getY(i)*8);}
    terrain.computeVertexNormals();mesh(terrain,mats.leaf);
    if(textures.tree){
      const leafMat=new T.MeshStandardMaterial({map:textures.tree,alphaTest:.48,side:T.DoubleSide,roughness:1,color:'#b4cfab'}),treeGeo=new T.PlaneGeometry(1,1);
      for(let i=0;i<26;i++){const x=i<13?-7-i*3.6:9+(i-13)*3.7,z=i%3===0?-5:-17-(i%4)*3,h=7+(i%5)*1.25;
        for(const a of [0,Math.PI/2])instance(treeGeo,leafMat,[x,h/2+1,z],[h*.66,h,1],[0,a+i*.23,0]);}
    }
    const boat=new T.Group();boat.position.set(-9,.2,12);boat.rotation.y=-.25;root.add(boat);
    const outline=new T.Shape();outline.moveTo(-2.6,0);outline.quadraticCurveTo(-1.8,.85,1.8,.55);outline.lineTo(2.6,0);outline.quadraticCurveTo(1.7,-.85,-1.8,-.55);outline.closePath();
    const hull=new T.ExtrudeGeometry(outline,{depth:.28,bevelEnabled:true,bevelSize:.06,bevelThickness:.07,bevelSegments:1});hull.rotateX(-Math.PI/2);boat.add(new T.Mesh(hull,mats.dark));
    const pole=new T.Mesh(new T.CylinderGeometry(.025,.025,1.8,6),mats.wood);pole.position.set(1.2,1,0);boat.add(pole);
    const lamp=new T.Mesh(newLantern(),mats.lamp);lamp.position.set(1.2,1.75,0);lamp.scale.set(.18,.27,.18);boat.add(lamp);
    for(const [m,a] of staticGroups){const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(a.p,3));g.setAttribute('normal',new T.Float32BufferAttribute(a.n,3));g.setAttribute('uv',new T.Float32BufferAttribute(a.uv,2));const o=new T.Mesh(g,m);o.castShadow=true;o.receiveShadow=true;root.add(o);}
    let instanceCount=0;
    for(const {g,m,matrices} of batches.values()){const o=new T.InstancedMesh(g,m,matrices.length);matrices.forEach((matrix,i)=>o.setMatrixAt(i,matrix));o.instanceMatrix.needsUpdate=true;o.castShadow=true;o.receiveShadow=true;o.computeBoundingSphere();root.add(o);instanceCount+=matrices.length;}
    // cylGeo is reserved for future fixtures but not referenced by any live mesh.
    cylGeo.dispose();root.updateMatrixWorld(true);
    return {root,materials:mats,textures,missingAssets,instanceCount,storeyCount:levels.length,faceCount:6,windowOpeningCount,levels,towerBounds:[[0,.20,0],[0,top+1.18,0]],
      setLights(level){mats.window.emissiveIntensity=level*.8;mats.lamp.emissiveIntensity=level*1.2;mats.glow.emissiveIntensity=level*1.1;},
      update(seconds){boat.position.y=.2+Math.sin(seconds*.85)*.035;boat.rotation.z=Math.sin(seconds*.64)*.012;lamp.rotation.z=Math.sin(seconds*.9)*.08;}};
  }
  window.FenghuangWanmingModel=Object.freeze({create});
})();
