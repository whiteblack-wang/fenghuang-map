/* Exterior camera positions are artistic, not surveyed navigation coordinates. */
(() => {
  const bridgeStops={
    bank:{pos:[9,11.2,42],look:[0,8.5,0],title:'临水望虹桥',desc:'把脚步放慢，让一江风景靠近。',min:25,max:200,angle:.65,tilt:.28},
    entrance:{pos:[26,11,15],look:[17,10,0],title:'桥头相逢',desc:'从桥头看两岸吊脚楼，灯影沿水而行。',min:11,max:25,angle:.35,tilt:.22},
    detail:{pos:[3,12.7,15],look:[0,12.1,3.1],title:'近看廊窗',desc:'走近灰瓦与木窗，看看廊桥的细节。',min:5,max:19,angle:.48,tilt:.24},
    arch:{pos:[0,2.2,5],look:[0,3,-10],title:'桥下听水',desc:'从石拱之间，望向另一岸。',min:9,max:23,angle:.22,tilt:.12},
    deck:{pos:[13.4,9.55,1.25],look:[1,9.55,1.25],title:'桥上看沱江',desc:'走到虹桥中央，听桥下水声穿过古城。',min:6,max:14,angle:.09,tilt:.07}
  };

  window.FenghuangExplorationScenes=Object.freeze({
    hongqiao:{title:'虹桥',quote:'沱江之上的风景，也是凤凰的心脏。',english:'HONGQIAO',modelScript:'bridge-model.js',modelGlobal:'FenghuangBridgeModel',skyDirectory:'assets/bridge',stops:bridgeStops,labels:['河岸','桥头','廊窗','桥下','桥上'],bankAspect:1.55,points:[[-10,11,4],[10,11,4],[-10,2.5,6],[10,2.5,6]]},
    wanming:{title:'万名塔',quote:'临水而立的塔影，映着古城的悠悠时光。',english:'WANMING PAGODA',modelScript:'wanming-model.js',modelGlobal:'FenghuangWanmingModel',skyDirectory:'assets/wanming',bankAspect:.7,points:[[4,7,5],[-4,15,4],[3,23,4],[-9,2,12]],labels:['临水','塔基','飞檐','拱窗','沿岸'],stops:{
      bank:{pos:[15.4,15.64,50.6],look:[0,13,0],title:'临水望万名塔',desc:'临水而立的塔影，映着古城的悠悠时光。',min:32,max:120,angle:.65,tilt:.2},
      base:{pos:[7,4.8,11],look:[0,3,0],title:'近看塔基',desc:'外部观察 · 建筑尺寸与未见立面待核实',min:7,max:22,angle:.4,tilt:.16,minHeight:2.3},
      eaves:{pos:[6,20,10],look:[0,18.7,0],title:'仰望飞檐',desc:'外部观察 · 六角层檐与灰瓦细部',min:6,max:22,angle:.45,tilt:.22},
      window:{pos:[3.7,8.4,7.6],look:[0,8,0],title:'近看拱窗',desc:'外部观察 · 拱窗、砖石与浅色线脚',min:5.5,max:17,angle:.35,tilt:.18},
      riverside:{pos:[-30,12,43],look:[0,13,0],title:'沿岸观塔',desc:'外部观察 · 塔身与临水环境',min:32,max:110,angle:.5,tilt:.18}
    }}
  });
})();
