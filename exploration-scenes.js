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
    }},
    shencongwen:{title:'沈从文故居',quote:'在一方院落里，遇见文字中的湘西。',english:'SHEN CONGWEN RESIDENCE',modelScript:'shencongwen-model.js?v=1',modelGlobal:'FenghuangShencongwenModel',fixedTime:'day',water:false,scrollStops:true,bankAspect:.62,
      note:'依据参考照片制作 · 非实测复原',help:'单指近看 · 双指缩放 · 下方滑动选景',
      lighting:{ambient:.68,ambientColor:'#f2ece0',hemiPower:2.3,hemiColor:'#f4f0e5',groundColor:'#776857',sunPower:2.1,skyColor:'#d5e2e7',exposure:1.13,shadowSize:12,sunTarget:[0,1.7,-3],fills:[{position:[0,3.2,-4.5],color:'#fff4df',intensity:18,distance:13},{position:[0,2.8,1],color:'#edf2ef',intensity:10,distance:13}]},
      points:[],labels:['天井','堂屋','桌椅','书画','门窗','匾额','砖石','灰瓦'],stops:{
        bank:{pos:[5.6,4,11],look:[0,1.8,-2.4],title:'天井望堂屋',desc:'青砖、木窗与一方天井，保留照片可见的院落关系。',min:8,max:45,angle:.36,tilt:.17,minHeight:2},
        hall:{pos:[0,1.92,-2.95],look:[0,1.8,-7.8],fov:60,portraitFov:82,title:'走进堂屋',desc:'近看木梁、砖地、两侧座椅与堂屋陈设。',min:3.8,max:5.1,angle:.16,tilt:.16,minHeight:1.2},
        furniture:{pos:[-.4,1.63,-4.9],look:[-2.85,1.03,-5.7],portraitFov:68,title:'桌椅与木作',desc:'扶手、靠背、横枨与桌沿均为立体构件。',min:1.6,max:2.9,angle:.25,tilt:.2,minHeight:.8},
        art:{pos:[0,2.25,-4.65],look:[0,2.3,-8.45],portraitFov:85,title:'书画与陈设',desc:'门匾与书画取自参考照片；肖像陈列的雕塑细节为示意。',min:2.9,max:4.15,angle:.18,tilt:.17,minHeight:1.25},
        lattice:{pos:[3,2.2,.5],look:[2.9,2.1,-2.4],portraitFov:76,title:'木门与花窗',desc:'通透花格、门板木纹与砖墙窗台，可拖动近看。',min:1.9,max:3.6,angle:.25,tilt:.22,minHeight:1},
        plaque:{pos:[.25,3.55,.9],look:[0,3.45,-2.4],portraitFov:70,title:'沈从文故居门匾',desc:'使用参考照片校正透视的原有门匾，保留文字与旧木色。',min:2,max:4.2,angle:.22,tilt:.2,minHeight:2.7},
        masonry:{pos:[2.25,1.22,.8],look:[2.25,.53,-2.2],portraitFov:65,title:'砖墙与地砖',desc:'砖缝、石板接缝与磨损材质，构成近看的细部。',min:1.8,max:3.4,angle:.23,tilt:.22,minHeight:.65},
        roof:{pos:[6.3,5.8,1.7],look:[3,4.2,-3.2],portraitFov:65,title:'灰瓦与檐口',desc:'弧形筒瓦、瓦当与木檐，依据照片中的构造特征表现。',min:3.7,max:7.4,angle:.24,tilt:.2,minHeight:3.8}
      }
    }
  });
})();
