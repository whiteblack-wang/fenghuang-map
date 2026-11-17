/* Photo-referenced courtyard and open reception hall. Dimensions, concealed rooms
 * and the simplified memorial bust are interpretive, not a measured survey.
 * Architectural openings, furniture joinery, masonry and roof tiles are geometry.
 */
(() => {
  'use strict';
  async function create(T) {
    const root=new T.Group();root.name='shencongwen-courtyard-and-reception-hall';
    const textures={},missingAssets=[],loader=new T.TextureLoader();
    const assetNames=['brick','brick-bump','brick-face','brick-face-bump','wood','wood-bump','floor','floor-bump','stone','stone-bump','tile','tile-bump','plaque','scroll-left','scroll-right','portrait','textile'];
    await Promise.all(assetNames.map(async name=>{
      try {const t=await loader.loadAsync(`assets/shencongwen/${name}.webp`);t.anisotropy=4;
        if(!name.endsWith('bump'))t.colorSpace=T.SRGBColorSpace;
        if(!['plaque','scroll-left','scroll-right','portrait'].includes(name))t.wrapS=t.wrapT=T.RepeatWrapping;
        textures[name]=t;
      }catch(_){missingAssets.push(name);}
    }));
    const mat=(key,color,bump=.024)=>new T.MeshStandardMaterial({map:textures[key]||null,bumpMap:textures[key+'-bump']||null,bumpScale:bump,color,roughness:.86});
    const mats={
      brick:mat('brick','#c5c6ba',.032),stone:mat('stone','#b1ac9b',.032),wood:mat('wood','#b9a085',.018),
      wornWood:mat('wood','#c4ac8a',.018),darkWood:mat('wood','#857461',.019),tile:mat('tile','#a4a9a5',.024),
      white:new T.MeshStandardMaterial({color:'#ddd8c4',roughness:.96}),grout:new T.MeshStandardMaterial({color:'#777467',roughness:1}),
      clay:mat('stone','#705341',.006),gold:new T.MeshStandardMaterial({color:'#b8a26d',roughness:.63,metalness:.14}),
      leaf:new T.MeshStandardMaterial({color:'#4f7145',roughness:.92,side:T.DoubleSide}),
      leafLight:new T.MeshStandardMaterial({color:'#7d9460',roughness:.97,side:T.DoubleSide}),
      red:new T.MeshStandardMaterial({color:'#bb392a',roughness:.83}),redRib:new T.MeshStandardMaterial({color:'#8e3324',roughness:.84}),
      cloth:new T.MeshStandardMaterial({map:textures.textile||null,color:'#d9d6c9',roughness:1,side:T.DoubleSide}),
      water:new T.MeshStandardMaterial({color:'#415746',roughness:.25,metalness:.12}),
      bust:new T.MeshStandardMaterial({color:'#c5c6be',roughness:.87}),bustShade:new T.MeshStandardMaterial({color:'#b7b8af',roughness:.90}),
      tileRim:mat('tile','#b8bbb5',.017),
      glass:new T.MeshStandardMaterial({color:'#c6e0d5',roughness:.12,transparent:true,opacity:.075,depthWrite:false,side:T.DoubleSide}),
      plaque:new T.MeshStandardMaterial({map:textures.plaque||null,color:'#ffffff',roughness:.82}),
      scrollLeft:new T.MeshStandardMaterial({map:textures['scroll-left']||null,color:'#fff8e6',roughness:.99}),
      scrollRight:new T.MeshStandardMaterial({map:textures['scroll-right']||null,color:'#fff8e6',roughness:.99}),
      portrait:new T.MeshStandardMaterial({map:textures.portrait||null,color:'#fff8e7',roughness:.99})
    };
    mats.tile.side=T.DoubleSide;
    const floorMats=['#c7c5b8','#b8baad','#d1cbb8','#bfc3b9','#d4cfc0'].map(color=>mat('stone',color,.026));
    const brickMats=['#c5c6ba','#b5b8ac','#d0cdbd','#babeb4'].map(color=>mat('brick-face',color,.029));
    const batches=new Map(),baked=new Map(),dummy=new T.Object3D(),boxGeo=new T.BoxGeometry(1,1,1),
      cylGeo=new T.CylinderGeometry(1,1,1,10),sphereGeo=new T.SphereGeometry(1,12,9);
    const counts={roofTiles:0,eaveEnds:0,bricks:0,floorPavers:0,latticeBars:0,chairs:0,benches:0,teaTables:0,scrolls:0,doors:0,lanterns:0,leafCards:0};
    let seed=1739;const rnd=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
    function instance(g,m,pos,scale=[1,1,1],rotation=[0,0,0]) {
      const k=g.uuid+':'+m.uuid;if(!batches.has(k))batches.set(k,{g,m,matrices:[]});
      dummy.position.set(...pos);dummy.scale.set(...scale);dummy.rotation.set(...rotation.slice(0,3),rotation[3]||'XYZ');dummy.updateMatrix();batches.get(k).matrices.push(dummy.matrix.clone());
    }
    function box(m,w,h,d,x,y,z,angle=0){instance(boxGeo,m,[x,y,z],[w,h,d],[0,angle,0]);}
    function mesh(g,m,pos=[0,0,0],rotation=[0,0,0],worldUV=0) {
      dummy.position.set(...pos);dummy.scale.set(1,1,1);dummy.rotation.set(...rotation);dummy.updateMatrix();
      const n=g.index?g.toNonIndexed():g.clone();n.applyMatrix4(dummy.matrix);
      if(worldUV){const p=n.attributes.position,normal=n.attributes.normal,u=n.attributes.uv;for(let i=0;i<p.count;i++){
        const ny=Math.abs(normal.getY(i)),nx=Math.abs(normal.getX(i));u.setXY(i,(nx>.6?p.getZ(i):p.getX(i))/worldUV,(ny>.6?p.getZ(i):p.getY(i))/worldUV);
      }}
      if(!baked.has(m))baked.set(m,{p:[],n:[],uv:[]});const a=baked.get(m);
      for(const v of n.attributes.position.array)a.p.push(v);for(const v of n.attributes.normal.array)a.n.push(v);
      for(const v of n.attributes.uv?.array||new Array(n.attributes.position.count*2).fill(0))a.uv.push(v);
      n.dispose();g.dispose();
    }
    function surfaceBox(m,w,h,d,x,y,z,uv=1.8){mesh(new T.BoxGeometry(w,h,d),m,[x,y,z],[0,0,0],uv);}
    function rod(m,a,b,r=.025){const p=new T.Vector3(...a),q=new T.Vector3(...b),delta=q.clone().sub(p);const o=new T.Object3D();o.position.copy(p.add(q).multiplyScalar(.5));o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),delta.clone().normalize());o.scale.set(r,delta.length(),r);o.updateMatrix();const k=cylGeo.uuid+':'+m.uuid;if(!batches.has(k))batches.set(k,{g:cylGeo,m,matrices:[]});batches.get(k).matrices.push(o.matrix.clone());}
    function curve(points,r,m){mesh(new T.TubeGeometry(new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p))),10,r,5,false),m);}
    function plane(m,w,h,x,y,z,angle=0){mesh(new T.PlaneGeometry(w,h),m,[x,y,z],[0,angle,0]);}
    function framedArt(m,w,h,x,y,z,angle=0){
      const cos=Math.cos(angle),sin=Math.sin(angle),at=(xx,yy,zz)=>[x+xx*cos+zz*sin,y+yy,z+zz*cos-xx*sin];
      plane(m,w,h,...at(0,0,.018),angle);
      for(const xx of [-w/2-.027,w/2+.027]){const p=at(xx,0,0);box(mats.darkWood,.052,h+.12,.055,...p,angle);}
      for(const yy of [-h/2-.025,h/2+.025]){const p=at(0,yy,0);box(mats.darkWood,w+.105,.052,.055,...p,angle);}
    }

    // True joints between individual, subtly varied courtyard flagstones.
    surfaceBox(mats.grout,12.4,.21,18.2,0,-.065,-1.2,2.4);
    function paving(x0,x1,z0,z1,y,dx,dz){
      let row=0;for(let z=z0;z<z1-.01;z+=dz,row++)for(let x=x0-(row%2?dx/2:0);x<x1-.01;x+=dx){
        const left=Math.max(x,x0),right=Math.min(x+dx,x1);if(right-left<.12)continue;
        surfaceBox(floorMats[(row+Math.round((x-x0)/dx)+12)%floorMats.length],right-left-.018,.065,dz-.018,(left+right)/2,y-.032,z+dz/2,1.65);counts.floorPavers++;
      }
    }
    paving(-5.05,5.05,-2.0,7.1,.08,.48,.78);
    surfaceBox(mats.grout,10.4,.40,6.6,0,.25,-5.55,2);
    paving(-4.96,4.96,-8.85,-2.4,.485,.46,.68);
    for(let i=0;i<3;i++)surfaceBox(floorMats[2],3.48,.13,.47,0,.12+i*.13,-1.24-i*.45,2);
    surfaceBox(mats.stone,3.15,.13,.26,0,.49,-2.2,1.4);

    function brickWall(x0,x1,y0,y1,z,depth=.22){
      let row=0;for(let y=y0;y<y1-.06;y+=.155,row++)for(let x=x0-(row%2?.20:0);x<x1-.03;x+=.40){
        const left=Math.max(x,x0),right=Math.min(x+.40,x1);if(right-left<.07)continue;
        box(brickMats[(row+Math.round((x-x0)/.4)+16)%4],right-left-.014,.142,depth,(left+right)/2,y+.071,z);counts.bricks++;
      }
    }
    // Masonry below the open lattice windows, with raised pale stone sills.
    for(const side of [-1,1]){
      brickWall(side<0?-5.02:1.76,side<0?-1.76:5.02,.49,1.46,-2.4,.30);
      box(mats.white,3.28,.12,.43,side*3.4,1.49,-2.38);
      box(mats.stone,3.28,.12,.38,side*3.4,.53,-2.36);
    }
    // Main side walls have real thickness; interior boards cover their brick base.
    for(const side of [-1,1]){
      surfaceBox(mats.brick,.30,3.46,6.56,side*5.0,2.2,-5.65,1.55);
      for(let z=-8.65;z<-2.47;z+=.205)box(mats.wood,.055,3.38,.194,side*4.82,2.2,z);
      for(const z of [-8.55,-6.4,-4.25,-2.45])box(mats.darkWood,.18,3.48,.19,side*4.76,2.21,z);
    }
    // Recessed door openings at the back echo the two rooms visible in the photos.
    for(const [x,w] of [[0,4.25],[-4.68,.62],[4.68,.62]]){
      box(mats.darkWood,w,3.48,.10,x,2.21,-8.87);
      for(let xx=x-w/2;xx<x+w/2;xx+=.19)box(mats.wood,.181,3.48,.13,xx+.09,2.21,-8.76);
    }
    for(const side of [-1,1]){
      box(mats.wood,2.04,.78,.15,side*3.22,3.59,-8.76);
      for(const x of [side*2.20,side*4.22])box(mats.darkWood,.15,3.08,.30,x,1.99,-8.70);
      surfaceBox(mats.white,2.10,2.85,.14,side*3.22,1.96,-9.61,2.5);
      surfaceBox(mats.grout,1.95,.10,1.0,side*3.23,.43,-9.20,2.5);
      box(mats.darkWood,.20,2.85,1.0,side*4.24,1.98,-9.20);
    }

    // Open central doorway, timber bases, visible lintels, intricate geometric lattice.
    for(const x of [-5.02,-1.64,1.64,5.02]){
      instance(cylGeo,mats.darkWood,[x,2.21,-2.29],[.115,3.5,.115]);
      instance(cylGeo,mats.stone,[x,.62,-2.29],[.16,.30,.16]);
      instance(cylGeo,mats.wood,[x,3.80,-2.29],[.15,.12,.15]);
    }
    box(mats.darkWood,10.45,.25,.30,0,3.86,-2.36);
    box(mats.wornWood,10.5,.09,.34,0,3.67,-2.32);
    box(mats.wood,3.08,.11,.27,0,3.22,-2.39);
    const hingeGeo=new T.CylinderGeometry(.023,.023,.15,8),nailGeo=new T.SphereGeometry(.018,6,5);
    function lattice(w,h,x,y,z,angle=0,ornate=true){
      const cos=Math.cos(angle),sin=Math.sin(angle),add=(m,ww,hh,dd,xx,yy,zz=0)=>{box(m,ww,hh,dd,x+xx*cos+zz*sin,y+yy,z+zz*cos-xx*sin,angle);counts.latticeBars++;};
      for(const xx of [-w/2,w/2])add(mats.darkWood,.085,h+.10,.10,xx,0);
      for(const yy of [-h/2,h/2])add(mats.darkWood,w+.09,.09,.10,0,yy);
      const border=.16;
      for(const xx of [-w/2+border,w/2-border])add(mats.wood,.038,h-.24,.055,xx,0,.005);
      for(const yy of [-h/2+border,h/2-border])add(mats.wood,w-.24,.038,.055,0,yy,.005);
      const innerW=w-.55,innerH=h-.58;
      for(const xx of [-innerW/2,innerW/2])add(mats.wornWood,.036,innerH,.065,xx,0,.014);
      for(const yy of [-innerH/2,innerH/2])add(mats.wornWood,innerW,.036,.065,0,yy,.014);
      const cols=Math.max(2,Math.floor(w/.40)),rows=Math.max(2,Math.floor(h/.38));
      for(let i=1;i<cols;i++)add(mats.wood,.028,h-.32,.055,-w/2+i*w/cols,0,-.005);
      for(let j=1;j<rows;j++)add(mats.wood,w-.32,.028,.055,0,-h/2+j*h/rows,-.005);
      if(ornate)for(let i=0;i<cols;i++)for(let j=0;j<rows;j++)if((i+j)%2===0){const xx=-w/2+(i+.5)*w/cols,yy=-h/2+(j+.5)*h/rows;
        add(mats.wornWood,.14,.024,.067,xx,yy+.055,.015);add(mats.wornWood,.024,.14,.067,xx+.055,yy,.015);
      }
    }
    for(const side of [-1,1]){
      lattice(2.76,1.72,side*3.35,2.42,-2.26);
      lattice(2.76,.34,side*3.35,3.49,-2.26,0,false);
    }
    function openDoor(side){
      const angle=side*.34,x=side*1.78,z=-2.60,cos=Math.cos(angle),sin=Math.sin(angle);
      const add=(m,w,h,d,xx,yy,zz)=>box(m,w,h,d,x+xx*cos+zz*sin,yy,z+zz*cos-xx*sin,angle);
      add(mats.wood,.59,1.08,.10,0,1.04,0);
      for(const xx of [-.34,.34])add(mats.darkWood,.085,2.65,.13,xx,1.85,0);
      for(const yy of [.55,1.60,3.15])add(mats.wornWood,.70,.09,.13,0,yy,0);
      lattice(.60,1.40,x,2.39,z+.02,angle);
      for(const xx of [-.21,0,.21])add(mats.wornWood,.015,.77,.13,xx,1.04,.025);
      for(const y of [.78,2.70])instance(hingeGeo,mats.gold,[x+side*.34,y,z],[1,1,1]);
      for(const y of [.74,1.29])for(const xx of [-.21,.21])instance(nailGeo,mats.gold,[x+xx*cos,y,z-xx*sin+.07]);
      counts.doors++;
    }
    openDoor(-1);openDoor(1);
    // Substantial plaque backing, raised perimeter and the user's photographed lettering.
    box(mats.darkWood,1.89,.96,.13,0,3.49,-2.19);
    framedArt(mats.plaque,1.75,.834,0,3.49,-2.10);
    for(const x of [-.67,.67])box(mats.darkWood,.17,.11,.20,x,2.96,-2.13);

    // Exposed roof structure and separately modelled boards visible inside the hall.
    for(const z of [-2.65,-4.55,-6.45,-8.45]){
      box(mats.darkWood,10.2,.21,.23,0,3.81,z);
      box(mats.wornWood,9.7,.065,.30,0,3.67,z);
    }
    for(let x=-4.9;x<5;x+=.225)box(mats.wood,.212,.065,6.3,x,3.99,-5.57);
    for(const x of [-3.45,0,3.45])box(mats.darkWood,.17,.20,6.6,x,3.90,-5.55);

    const tileG=(()=>{const p=[],uv=[],idx=[],steps=7,r=.105,len=.48;for(let j=0;j<2;j++)for(let i=0;i<=steps;i++){
      const a=i/steps*Math.PI;p.push(Math.cos(a)*r,Math.sin(a)*r,j*len);uv.push(i/steps,j);}
      for(let i=0;i<steps;i++){idx.push(i,i+steps+1,i+1,i+1,i+steps+1,i+steps+2);}const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(p,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(idx);g.computeVertexNormals();return g;})();
    const capShape=new T.Shape();capShape.moveTo(-.094,0);for(let i=0;i<=12;i++){const a=Math.PI-i/12*Math.PI;capShape.lineTo(Math.cos(a)*.094,Math.sin(a)*.094);}capShape.closePath();const capGeo=new T.ShapeGeometry(capShape);
    const rimG=(()=>{const p=[],uv=[],idx=[],steps=7;for(let j=0;j<2;j++)for(let i=0;i<=steps;i++){
      const a=i/steps*Math.PI;p.push(Math.cos(a)*.118,Math.sin(a)*.118+.012,.43+j*.025);uv.push(i/steps,j);}
      for(let i=0;i<steps;i++)idx.push(i,i+steps+1,i+1,i+1,i+steps+1,i+steps+2);const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(p,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(idx);g.computeVertexNormals();return g;})();
    function roof(width,run,cx,cz,ridge,eave,angle=0){
      const cos=Math.cos(angle),sin=Math.sin(angle),world=(x,y,z)=>[cx+x*cos+z*sin,y,cz+z*cos-x*sin];
      for(const side of [-1,1]){
        const g=new T.PlaneGeometry(width,run,4,10);g.rotateX(-Math.PI/2);const p=g.attributes.position,u=g.attributes.uv;
        for(let i=0;i<p.count;i++){const zz=p.getZ(i)+run/2,v=zz/run;const y=ridge-(ridge-eave)*v+.12*Math.pow(v,7);p.setXYZ(i,p.getX(i),y,side*zz);u.setXY(i,(p.getX(i)+width/2)/.42,v*7);}g.computeVertexNormals();mesh(g,mats.tile,[cx,0,cz],[0,angle,0]);
        const rows=Math.ceil(run/.36),cols=Math.floor(width/.205);
        for(let col=0;col<cols;col++)for(let row=0;row<rows;row++){
          const xx=-width/2+.12+col*.205,zz=.025+row*run/rows,v=zz/run,y=ridge-(ridge-eave)*v+.12*Math.pow(v,7);
          const slope=Math.atan(((ridge-eave)-.84*Math.pow(v,6))/run);
          instance(tileG,mats.tile,world(xx,y,side*zz),[1,1,1],[slope,angle+(side<0?Math.PI:0),0,'YXZ']);counts.roofTiles++;
          instance(rimG,mats.tileRim,world(xx,y,side*zz),[1,1,1],[slope,angle+(side<0?Math.PI:0),0,'YXZ']);
        }
        const last=.025+(rows-1)*run/rows,v=last/run,slope=Math.atan(((ridge-eave)-.84*Math.pow(v,6))/run),endY=ridge-(ridge-eave)*v+.12*Math.pow(v,7)-Math.sin(slope)*.48,endZ=last+Math.cos(slope)*.48;
        for(let col=0;col<cols;col++){const xx=-width/2+.12+col*.205;instance(capGeo,mats.white,world(xx,endY,side*(endZ+.004)),[1,1,1],[0,angle+(side<0?Math.PI:0),0]);counts.eaveEnds++;}
        const ends=[world(-width/2,eave+.12,side*run),world(width/2,eave+.12,side*run)];rod(mats.darkWood,ends[0],ends[1],.07);
      }
      rod(mats.darkWood,world(-width/2-.10,ridge+.12,0),world(width/2+.1,ridge+.12,0),.105);
      for(const x of [-width/2,width/2]){
        for(const side of [-1,1])curve([world(x,ridge+.12,0),world(x,ridge-.12,side*.6),world(x,eave+.12,side*run)],.062,mats.darkWood);
        curve([world(x,ridge+.08,0),world(x+(x<0?-.15:.15),ridge+.3,0),world(x+(x<0?-.23:.23),ridge+.48,0)],.055,mats.tile);
      }
    }
    roof(11.55,3.68,0,-5.65,5.57,3.91);

    // The two courtyard wings are real open lattice facades and perpendicular tiled roofs.
    for(const side of [-1,1]){
      surfaceBox(mats.brick,.24,2.65,7.8,side*6.85,1.44,1.25,1.9);
      surfaceBox(mats.darkWood,1.8,.13,7.8,side*6.00,.14,1.25,1.9);
      for(const z of [-2.54,5.04])surfaceBox(mats.brick,1.8,2.65,.18,side*6.00,1.44,z,1.9);
      // Inner face is split into sill and transom: no solid wall behind the windows.
      surfaceBox(mats.grout,.28,1.08,7.65,side*5.08,.64,1.25,1.8);
      for(let row=0;row<7;row++)for(let j=0;j<19;j++){
        const zz=-2.30+j*.40+(row%2?.18:0);if(zz>5.0)continue;
        box(brickMats[(row+j)%4],.21,.142,.385,side*4.97,.15+row*.155,zz);counts.bricks++;
      }
      box(mats.white,.35,.10,7.8,side*4.96,1.19,1.25);
      for(const z of [-1.70,.35,2.40,4.45]){
        lattice(1.78,1.13,side*4.96,1.88,z,-side*Math.PI/2);
        box(mats.darkWood,.19,2.78,.14,side*4.95,1.54,z-1.0);
      }
      box(mats.darkWood,.25,.18,7.9,side*4.95,2.57,1.25);
      roof(8.12,1.58,side*6.0,1.25,3.66,2.65,Math.PI/2);
      // Whitewashed upturned gable at the rear of each lower wing.
      surfaceBox(mats.white,1.8,.65,.15,side*6.0,3.01,-2.55,2.5);
    }

    // Six armchairs with separate legs, stretchers, lattice backs and curved arm rails.
    const turnedLeg=new T.LatheGeometry([new T.Vector2(.034,0),new T.Vector2(.044,.025),new T.Vector2(.025,.07),new T.Vector2(.033,.14),new T.Vector2(.035,.34),new T.Vector2(.042,.40)],8);
    function chair(x,z,angle){
      const c=Math.cos(angle),s=Math.sin(angle),at=(xx,yy,zz)=>[x+xx*c+zz*s,yy,z+zz*c-xx*s];
      const b=(m,w,h,d,xx,y,zz)=>box(m,w,h,d,...at(xx,y,zz),angle);
      for(const xx of [-.31,.31])for(const zz of [-.30,.30])instance(turnedLeg,mats.wornWood,at(xx,.50,zz),[1,1,1],[0,angle,0]);
      b(mats.wornWood,.78,.06,.76,0,.94,0);
      for(const yy of [.69,.85]){b(mats.wood,.65,.045,.05,0,yy,.29);b(mats.wood,.65,.045,.05,0,yy,-.29);b(mats.wood,.05,.045,.62,-.30,yy,0);b(mats.wood,.05,.045,.62,.30,yy,0);}
      for(const xx of [-.33,.33]){b(mats.wornWood,.055,.75,.06,xx,1.30,-.31);b(mats.wornWood,.05,.29,.05,xx,1.10,.27);
        const pts=[[xx,1.24,.30],[xx,1.27,.16],[xx,1.31,-.12],[xx,1.36,-.32]].map(p=>at(...p));curve(pts,.027,mats.wornWood);}
      b(mats.wornWood,.70,.08,.075,0,1.66,-.31);b(mats.wood,.61,.045,.05,0,1.12,-.32);
      for(const xx of [-.23,.23])b(mats.wornWood,.025,.45,.035,xx,1.39,-.32);
      for(let i=0;i<7;i++){b(mats.wood,.012,.42,.022,-.19+i*.063,1.39,-.32);b(mats.wood,.43,.012,.025,0,1.21+i*.062,-.322);}
      b(mats.darkWood,.57,.018,.54,0,.98,0);
      // Fine seat slats and beaded apron convey joinery at the close inspection stop.
      for(let j=0;j<9;j++)b(mats.wornWood,.56,.008,.008,0,.993,-.25+j*.06);
      for(let j=0;j<7;j++)b(mats.wornWood,.018,.028,.025,-.24+j*.08,.89,.359);
      counts.chairs++;
    }
    for(const side of [-1,1])for(const z of [-3.75,-5.38,-7.00])chair(side*2.95,z,side<0?Math.PI/2:-Math.PI/2);
    function teaTable(x,z){
      box(mats.wornWood,.69,.055,.64,x,1.02,z);box(mats.wood,.59,.045,.54,x,.95,z);
      for(const xx of [-.255,.255])for(const zz of [-.235,.235]){
        box(mats.wornWood,.045,.48,.045,x+xx,.755,z+zz);
        box(mats.wood,.052,.035,.48,x+xx,.64,z);
      }
      for(const zz of [-.235,.235])box(mats.wood,.56,.035,.045,x,.64,z+zz);
      for(const xx of [-.22,.22]){instance(cupGeo,mats.white,[x+xx,1.05,z]);instance(teaGeo,mats.clay,[x+xx,1.113,z],[1,1,1],[-Math.PI/2,0,0]);}
      counts.teaTables++;
    }
    const cupGeo=new T.LatheGeometry([[.033,0],[.045,.015],[.053,.065],[.05,.077],[.044,.077],[.041,.024],[.031,.015]].map(p=>new T.Vector2(...p)),12),teaGeo=new T.CircleGeometry(.044,12);
    for(const side of [-1,1])for(const z of [-4.57,-6.20])teaTable(side*2.95,z);
    for(const side of [-1,1]){
      const x=side*3.65,z=-3.55;box(mats.wornWood,.48,.055,1.25,x,.88,z);
      for(const zz of [-.50,.5])for(const xx of [-.15,.15])box(mats.wood,.042,.35,.042,x+xx,.67,z+zz);
      for(const zz of [-.52,.52])box(mats.wood,.055,.65,.055,x+side*.15,1.18,z+zz);
      box(mats.wornWood,.045,.075,1.20,x+side*.15,1.48,z);
      counts.benches++;
    }

    // Real wall-hung photographs/calligraphy, framed and slightly proud of the boards.
    framedArt(mats.scrollLeft,.533,2.13,-1.18,2.42,-8.63);counts.scrolls++;
    framedArt(mats.scrollRight,.533,2.13,1.18,2.42,-8.63);counts.scrolls++;
    framedArt(mats.portrait,.576,.96,0,2.99,-8.61);
    for(const side of [-1,1])for(const z of [-4.40,-6.48]){
      framedArt(side<0?mats.scrollLeft:mats.scrollRight,.488,1.95,side*4.73,2.42,z,-side*Math.PI/2);counts.scrolls++;
    }
    box(mats.wood,1.95,.11,.94,0,1.17,-7.90);
    for(const x of [-.76,.76])for(const z of [-8.20,-7.61])box(mats.wornWood,.075,.66,.075,x,.82,z);
    box(mats.darkWood,1.66,.08,.69,0,.73,-7.90);
    // Wavy hanging cloth has geometry and a separate horizontal top, not a flat cutout.
    const cloth=new T.PlaneGeometry(2.07,.59,20,10),cp=cloth.attributes.position;
    for(let i=0;i<cp.count;i++){const x=cp.getX(i),yy=cp.getY(i),v=(.295-yy)/.59;cp.setXYZ(i,x,yy+.015*Math.sin(x*14)*v,.026*Math.sin(x*19)*v);}cloth.computeVertexNormals();mesh(cloth,mats.cloth,[0,.913,-7.402]);
    mesh(new T.PlaneGeometry(2.07,1.02),mats.cloth,[0,1.232,-7.90],[-Math.PI/2,0,0]);
    for(const side of [-1,1])mesh(new T.PlaneGeometry(.99,.56,8,8),mats.cloth,[side*1.015,.94,-7.90],[0,side*Math.PI/2,0]);
    // Interpretive small memorial bust: photographed artworks, rather than invented text.
    box(mats.darkWood,.79,.17,.62,0,1.32,-7.91);box(mats.gold,.70,.012,.53,0,1.414,-7.91);
    const torso=new T.LatheGeometry([[.22,0],[.265,.025],[.27,.08],[.245,.18],[.15,.28],[.07,.31]].map(p=>new T.Vector2(...p)),20);torso.scale(1,.95,.66);mesh(torso,mats.bust,[0,1.43,-7.91]);
    const head=new T.SphereGeometry(1,28,20),hp=head.attributes.position;
    for(let i=0;i<hp.count;i++){let x=hp.getX(i),y=hp.getY(i),z=hp.getZ(i);const jaw=.85+.15*Math.min(1,(y+1)/.9);x*=jaw;
      if(z>0){z*=.91;z+=.05*Math.exp(-((x/.25)**2+((y+.20)/.4)**2));z-=.05*Math.exp(-(((Math.abs(x)-.40)/.17)**2+((y-.13)/.15)**2));}
      hp.setXYZ(i,x*.155,y*.21,z*.153);
    }head.computeVertexNormals();mesh(head,mats.bust,[0,2.00,-7.91]);
    instance(sphereGeo,mats.bust,[-.148,1.99,-7.916],[.026,.051,.024]);instance(sphereGeo,mats.bust,[.148,1.99,-7.916],[.026,.051,.024]);
    instance(cylGeo,mats.bust,[0,1.805,-7.91],[.065,.17,.066]);
    // Subtle monochrome relief, rather than black cartoon eyes or a painted face.
    for(const x of [-.057,.057]){
      instance(sphereGeo,mats.bustShade,[x,2.028,-7.772],[.032,.008,.006]);
      curve([[x-.032,2.045,-7.774],[x,2.050,-7.769],[x+.029,2.044,-7.775]],.004,mats.bust);
    }
    const nose=new T.BufferGeometry();nose.setAttribute('position',new T.Float32BufferAttribute([-.016,2.057,-7.772,.016,2.057,-7.772,0,1.985,-7.717,-.016,2.057,-7.772,0,1.985,-7.717,-.025,1.977,-7.753,.016,2.057,-7.772,.025,1.977,-7.753,0,1.985,-7.717,-.025,1.977,-7.753,0,1.985,-7.717,.025,1.977,-7.753],3));nose.computeVertexNormals();mesh(nose,mats.bust);
    curve([[-.040,1.940,-7.767],[0,1.936,-7.755],[.040,1.940,-7.767]],.003,mats.bustShade);
    curve([[-.14,1.67,-7.79],[-.07,1.72,-7.77],[0,1.69,-7.75],[.07,1.72,-7.77],[.14,1.67,-7.79]],.006,mats.bustShade);
    for(const side of [-1,1])curve([[side*.065,1.73,-7.80],[side*.10,1.66,-7.74],[side*.035,1.59,-7.72]],.004,mats.bust);
    const glassW=.82,glassH=1.01,glassD=.67,gx=0,gy=1.92,gz=-7.91;
    for(const x of [-glassW/2,glassW/2])for(const z of [-glassD/2,glassD/2])box(mats.darkWood,.017,glassH,.017,gx+x,gy,gz+z);
    for(const y of [-glassH/2,glassH/2]){
      for(const z of [-glassD/2,glassD/2])box(mats.darkWood,glassW,.017,.017,0,gy+y,gz+z);
      for(const x of [-glassW/2,glassW/2])box(mats.darkWood,.017,.017,glassD,x,gy+y,gz);
    }
    mesh(new T.PlaneGeometry(glassW,glassD),mats.glass,[0,gy+glassH/2,gz],[-Math.PI/2,0,0]);
    for(const z of [-glassD/2,glassD/2])plane(mats.glass,glassW,glassH,0,gy,gz+z);
    for(const x of [-glassW/2,glassW/2])plane(mats.glass,glassD,glassH,x,gy,gz,Math.PI/2);

    // Courtyard water jar with a thick rounded rim, hollow interior and contained water.
    const jarProfile=[[.45,.03],[.53,.09],[.68,.35],[.78,.74],[.81,1.03],[.83,1.11],[.81,1.16],[.75,1.16],[.73,1.10],[.70,.78],[.46,.12]].map(p=>new T.Vector2(...p));
    mesh(new T.LatheGeometry(jarProfile,40),mats.clay,[0,.085,2.15]);
    mesh(new T.TorusGeometry(.785,.043,6,40),mats.clay,[0,1.235,2.15],[Math.PI/2,0,0]);
    mesh(new T.CircleGeometry(.716,40),mats.water,[0,1.135,2.15],[-Math.PI/2,0,0]);
    mesh(new T.TorusGeometry(.35,.004,4,40),mats.white,[.02,1.139,2.16],[Math.PI/2,0,0]);

    const leafShape=new T.Shape();leafShape.moveTo(0,-.5);leafShape.quadraticCurveTo(.42,-.16,0,.5);leafShape.quadraticCurveTo(-.42,.16,0,-.5);const leafGeo=new T.ShapeGeometry(leafShape,6);
    for(const side of [-1,1]){
      const x=side*3.72,z=-.55;
      box(mats.stone,.90,.12,.88,x,.17,z);box(mats.clay,.70,.39,.66,x,.39,z);
      for(const xx of [-.41,.41])box(mats.stone,.10,.12,.90,x+xx,.62,z);
      for(const zz of [-.40,.40])box(mats.stone,.85,.12,.10,x,.62,z+zz);
      for(let j=0;j<7;j++)rod(mats.wood,[x,.55,z],[x+(rnd()-.5)*.45,1.29+(j%2)*.14,z+(rnd()-.5)*.45],.015);
      for(let i=0;i<680;i++){
        const a=rnd()*Math.PI*2,r=Math.sqrt(rnd()),h=(rnd()-.5)*1.4;
        const xx=x+Math.cos(a)*r*.78*Math.sqrt(Math.max(.08,1-h*h)),zz=z+Math.sin(a)*r*.61*Math.sqrt(Math.max(.08,1-h*h)),yy=1.26+h*.51;
        const size=.075+rnd()*.07;instance(leafGeo,i%4===0?mats.leafLight:mats.leaf,[xx,yy,zz],[size,size*.67,size],[rnd()*3.1,rnd()*6.28,rnd()*3.1]);counts.leafCards++;
      }
    }
    const lanternProfile=[[.025,-.27],[.12,-.23],[.22,-.13],[.245,0],[.22,.13],[.12,.23],[.025,.27]].map(p=>new T.Vector2(...p));
    const lanternGeo=new T.LatheGeometry(lanternProfile,20),tasselGeo=new T.CylinderGeometry(.045,.025,.28,8);
    for(const x of [-2.65,2.65]){
      const y=3.22,z=-1.79;rod(mats.darkWood,[x,3.98,z],[x,y+.27,z],.014);
      instance(lanternGeo,mats.red,[x,y,z],[1.18,1.18,1.18]);
      for(let j=0;j<12;j++){const a=j/12*Math.PI*2;curve([[x+Math.cos(a)*.09,y+.27,z+Math.sin(a)*.09],[x+Math.cos(a)*.287,y,z+Math.sin(a)*.287],[x+Math.cos(a)*.09,y-.27,z+Math.sin(a)*.09]],.0045,mats.redRib);}
      instance(cylGeo,mats.gold,[x,y-.29,z],[.067,.05,.067]);instance(tasselGeo,mats.gold,[x,y-.47,z],[1,1,1]);counts.lanterns++;
    }

    // Flush shared buffers: thousands of details render in a small number of calls.
    for(const [m,a] of baked){const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(a.p,3));g.setAttribute('normal',new T.Float32BufferAttribute(a.n,3));g.setAttribute('uv',new T.Float32BufferAttribute(a.uv,2));const o=new T.Mesh(g,m);o.name='residence-static-'+Object.entries(mats).find(([,v])=>v===m)?.[0];o.castShadow=m!==mats.glass;o.receiveShadow=true;root.add(o);}
    let instanceCount=0,triangleCount=0;
    for(const {g,m,matrices} of batches.values()){
      const o=new T.InstancedMesh(g,m,matrices.length);matrices.forEach((matrix,i)=>o.setMatrixAt(i,matrix));o.instanceMatrix.needsUpdate=true;o.castShadow=true;o.receiveShadow=true;o.computeBoundingSphere();root.add(o);instanceCount+=matrices.length;
    }
    root.updateMatrixWorld(true);root.traverse(o=>{if(o.geometry)triangleCount+=(o.geometry.index?o.geometry.index.count:o.geometry.attributes.position.count)/3*(o.isInstancedMesh?o.count:1);});
    const features=[
      {id:'courtyard',label:'天井与水缸',point:[0,1.0,2.15],sourceImages:[1,4]},
      {id:'plaque',label:'沈从文故居门匾',point:[0,3.49,-2.1],sourceImages:[1,5]},
      {id:'lattice',label:'木雕格扇与砖墙',point:[-3.35,2.25,-2.26],sourceImages:[1,4,5]},
      {id:'hall',label:'堂屋与书画陈设',point:[0,1.9,-6.4],sourceImages:[2,5]},
      {id:'furniture',label:'木椅与茶几细部',point:[2.95,1.15,-5.38],sourceImages:[2,5]},
      {id:'eaves',label:'灰瓦与白色瓦当',point:[1.0,4.0,-1.97],sourceImages:[3,4]},
      {id:'paving',label:'天井石砖与门槛',point:[0,.1,.1],sourceImages:[1,2,5]}
    ];
    root.userData={detailCounts:counts,features,triangleCount,interpretive:true};
    return {root,materials:mats,textures,missingAssets,instanceCount,detailCounts:counts,features,triangleCount,
      buildingBounds:[[-7.7,0,-9.8],[7.7,6.1,7.2]],
      setLights(){},update(){}};
  }
  window.FenghuangShencongwenModel=Object.freeze({create});
})();
