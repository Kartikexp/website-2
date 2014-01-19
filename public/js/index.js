
var ascensor = $('#ascensor').ascensor({direction:"x",ascensorFloorName:['','RUSH','EVENTS','CONTACT'],loop:false,time:400,childType:'section'});

$('#nav-bar div').click(function(event, index) {
	ascensor.trigger('scrollToStage', $(this).index());
});

$(".vendor").fitVids();

ascensor.on('scrollStart', function(event, floor){
	$('#nav-bar div').removeClass('selected');
	$('#nav-bar div:eq('+floor.to+')').addClass('selected nav-active');
});