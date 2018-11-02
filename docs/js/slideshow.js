$(document).ready(function(){

	var slideIndex = 0;

	showPhotos();

	function showPhotos(){
		var i;
		var slides = $('.photo img');

		//Запускаем цикл для скрытия фотографий
		for ( i = 0; i<slides.length; i++){
			console.log(i);
			$(slides[i]).hide();
		}

		//Считаем слайд индекс активной фотографии для показа
		slideIndex++;

		if(slideIndex > slides.length){
			slideIndex = 1;
		}
		$(slides[slideIndex-1]).show();

		setTimeout(showPhotos, 1500);
	}
});