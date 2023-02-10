<template>
  <block-pages :description="description" :title="title"></block-pages>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hazyna aýdym-saz we tans topary',
      description: `<p><span> &nbsp&nbsp&nbsp&nbsp Institutda häzirki zaman amatlyklary bolan kitaphana hem bar. 
		 Kitaphananyň gorunda türkmen, rus, iňlis dillerinde ykdysadyýet ylmynyň we tejribäniň
		  ähli ugurlary boýunça edebiýatlar, başga-da daşary ýurt dillerindäki käbir neşirler bar.
			Kitaphanada ykdysadyýet, maliýe, dolandyryş, marketing, ykdysady-matematiki usullar boýunça
			 elektron kitaplar, okuw gollanmalar, usulyýet edebiýatlar we ylmy monografiýalar bar.</span></p>
			 <p><span>Institutda&nbsp; institutyň kitaphana gorunyň elektron binýady bolan elektron
			  kitaphana hem hereket edýär. Elektron kitaphana bu innowasion ykdysadyýeti kemala getirmegiň 
			  wajyp şerti bolup durýar. Elektron kitaphana ýörite gözleg ulgamy bilen enjamlaşdyrylan we 
			  ol arkaly zerur bolan edebiýat çeşmeleri, şeýle hem Gahryman Arkadagymyzyň kitaplary bilen 
			  tanşyp bolýar. Diňe bir institutyň professor-mugallymlary tarapyndan ýazylan okuw kitaplaryny
				däl, eýsem başga awtorlaryň kitaplaryny hem okap bolýar.</span></p><p><span> &nbsp&nbsp&nbsp&nbspEdebiýat gözlegini 
				 dürli alamatlar, ýagny tema, adalga, neşir edilen ýyly, awtorlar we başga alamatlar arkaly amala
				  aşyryp bolýar. Kitaphana ýörite robot-skaner bilen enjamlaşdyrylan we ol bir minutda onlarça 
				  sahypalaryň suratyny alyp bilýär. Bu käbir neşirlerimiziň az mukdarda çap edilenligi, 
				  kitaplaryň aýawly saklanylmagy ýaly meseleleriň hem çözgüdini ýeňilleşdirýär. Bulardan
					başga-da ýiten, zaýalanan kitaplary täzeden dikeltmek mümkinçiliklerini döredýär. Biziň 
					kitaphanamyzda elektron neşirleriň sany gün-günden köpelýär. Bu kitaplary mugallymlarymyz,
					 talyplarymyz özleriniň ýan kompýuterlerine, elektron maglumat göterijilerine ýükläp alyp,
					  islendik pursatda olardan peýdalanýarlar.</span></p><p><span> &nbsp&nbsp&nbsp&nbsp Institutymyzda bilim portaly
		  hem hereket edýär, bu bolsa ýörite tor arkaly talyplara islendik ugurlar boýunça 
		  edebiýatlaryň, umumy sapaklaryň ýazgylarynyň baý edebi gorundan giňişleýin
			peýdalanmaklaryny üpjün edýär. Şular ýaly innowasion tehnologiýalaryň kömegi bilen 
			 ýaşlaryň bilim almak,ylym öwrenmek mümkinçilikleri barha ýokarlanýar. Kitaphananyň 
			 ýokary tizlikli internet ulgamy bilen enjamlaşdyrylmagy okyjylara elektron 
			 kitaphanasynyň gory bilen diňe lokal tor arkaly tanyşmaklygyna mümkinçiligi 
			 döretmän, eýsem bütindünýä intellektual gory bilen tanyşdyrýar. Kitaphana işini 
			 döwrebaplaşdyrmak ýaşlary okatmagyň, ylma çekmegiň netijeliligini gazanmak,hem-de
			  her bir okyja elýeterliligi üpjün etmek her bir kitaphana işgärleriniň esasy borjudyr.</span></p>`,
    }
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
}
</script>
