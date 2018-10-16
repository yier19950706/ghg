(function(){
	$(window).on('resize',function(){
		let json=[
	{
                bac:"url(./images/slide_01_2000x410.jpg)",
                img:"./images/slide_01_640x340.jpg"
            },
            {
                bac:"url(./images/slide_02_2000x410.jpg)",
                img:"./images/slide_02_640x340.jpg"
            },
            {
                bac:"url(./images/slide_03_2000x410.jpg)",
                img:"./images/slide_03_640x340.jpg"
            },
            {
                bac:"url(./images/slide_04_2000x410.jpg)",
                img:"./images/slide_04_640x340.jpg"
            }
		];
		
		let width=$(window).width();
		let isMobile=true;
		if(width<768){
			isMobile=true;
		}else{
			isMobile=false;
			
		}
		let html=template("sliderWrapper",{data:json,isMobile});
		$('#inner').html(html);		
	}).trigger('resize')
})();
