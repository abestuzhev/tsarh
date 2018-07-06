$( document ).ready(function() {
        $('.btn-3d').click(function() {
        	location.href="/3dtour";
        });

        $('#t-btn-video').click(function() {
        	var modal = UIkit.modal("#modal1");
        	modal.options.center = true;
        	
			if ( modal.isActive() ) {
			    modal.hide();
			} else {
			    modal.show();
			}
        });

        var video = $("#video1").attr("src");

        $('#modal1').on({

        	'show.uk.modal': function(){
		        $("#video1")[0].src += "&autoplay=1";
    		},

    		'hide.uk.modal': function(){
				$("#video1").attr("src","");
				$("#video1").attr("src",video);
    		}

    	});

});