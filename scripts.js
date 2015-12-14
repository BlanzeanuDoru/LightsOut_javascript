$(document).ready(function(){
	
	//functions for hovering the squares
	$('.square_init').mouseenter(function(){
		$(this).addClass('square_hover');
	})
	$('.square_init').mouseleave(function(){
		$(this).removeClass('square_hover');
	})
	
	
	var squares = $('.square_init'); //my squares
	//randomly generating 6 selected squares
	var x=0;
	for(var i=0;i<6;i++)
	{
		x = Math.floor(Math.random() * 24);
		$(squares[x]).removeClass('square_unselected');
		$(squares[x]).addClass('square_selected');
	}
	    var score=0;
		$('#score').text(score);
		
	$('#reset').click(function(){
		location.reload();
	});
	$('#submit_score').click(function(){
		alert("Your score is:"+score);
		location.reload();
	});	
		
	//function for the click event
	$('.square_init').click(function(){ 
	    score++;
		$('#score').text(score);
	     //identifying the square in my matrix squares
		var i=0;
		var pos=0;
		for(i=0;i<25;i++)
		{
			if(squares[i] == this)
			{
				pos=i;
				break;
			}
		}
		//row and col in my matrix
		var row = parseInt(pos/5);
		var col = pos%5;
		//go back to vector index row*5+col;
		if(row==0) //daca este pe prima linie
		{
			if(col > 0 && col < 4)  
			{
				
				if($(squares[col-1]).hasClass('square_selected'))
		           {
			           $(squares[col-1]).removeClass('square_selected');
			           $(squares[col-1]).addClass('square_unselected');
		           }
		        else if($(squares[col-1]).hasClass('square_unselected'))
		           {
			           $(squares[col-1]).removeClass('square_unselected');
			           $(squares[col-1]).addClass('square_selected');
		           }
				if($(squares[col+1]).hasClass('square_selected'))
		           {
			           $(squares[col+1]).removeClass('square_selected');
			           $(squares[col+1]).addClass('square_unselected');
		           }
		        else if($(squares[col+1]).hasClass('square_unselected'))
		           {
			           $(squares[col+1]).removeClass('square_unselected');
			           $(squares[col+1]).addClass('square_selected');
		           }
				 if($(squares[5+col]).hasClass('square_selected'))
		           {
			           $(squares[5+col]).removeClass('square_selected');
			           $(squares[5+col]).addClass('square_unselected');
		           }
		        else if($(squares[5+col]).hasClass('square_unselected'))
		           {
			           $(squares[5+col]).removeClass('square_unselected');
			           $(squares[5+col]).addClass('square_selected');
		           }
				 
			}
			else if(col == 0 )
			{
				if($(squares[col+1]).hasClass('square_selected'))
		           {
			           $(squares[col+1]).removeClass('square_selected');
			           $(squares[col+1]).addClass('square_unselected');
		           }
		        else if($(squares[col+1]).hasClass('square_unselected'))
		           {
			           $(squares[col+1]).removeClass('square_unselected');
			           $(squares[col+1]).addClass('square_selected');
		           }
				 if($(squares[5+col]).hasClass('square_selected'))
		           {
			           $(squares[5+col]).removeClass('square_selected');
			           $(squares[5+col]).addClass('square_unselected');
		           }
		        else if($(squares[5+col]).hasClass('square_unselected'))
		           {
			           $(squares[5+col]).removeClass('square_unselected');
			           $(squares[5+col]).addClass('square_selected');
		           }
			}
			else if(col == 4)
			{
				if($(squares[col-1]).hasClass('square_selected'))
		           {
			           $(squares[col-1]).removeClass('square_selected');
			           $(squares[col-1]).addClass('square_unselected');
		           }
		        else if($(squares[col-1]).hasClass('square_unselected'))
		           {
			           $(squares[col-1]).removeClass('square_unselected');
			           $(squares[col-1]).addClass('square_selected');
		           }
				 if($(squares[5+col]).hasClass('square_selected'))
		           {
			           $(squares[5+col]).removeClass('square_selected');
			           $(squares[5+col]).addClass('square_unselected');
		           }
		        else if($(squares[5+col]).hasClass('square_unselected'))
		           {
			           $(squares[5+col]).removeClass('square_unselected');
			           $(squares[5+col]).addClass('square_selected');
		           }
			}
		}
		else if(row == 4) //daca este pe ultima linie
		{
			if(col > 0 && col < 4)
			{
				if($(squares[4*5+col-1]).hasClass('square_selected'))
		           {
			           $(squares[4*5+col-1]).removeClass('square_selected');
			           $(squares[4*5+col-1]).addClass('square_unselected');
		           }
		        else if($(squares[4*5+col-1]).hasClass('square_unselected'))
		           {
			           $(squares[4*5+col-1]).removeClass('square_unselected');
			           $(squares[4*5+col-1]).addClass('square_selected');
		           }
				if($(squares[4*5+col+1]).hasClass('square_selected'))
		           {
			           $(squares[4*5+col+1]).removeClass('square_selected');
			           $(squares[4*5+col+1]).addClass('square_unselected');
		           }
		        else if($(squares[4*5+col+1]).hasClass('square_unselected'))
		           {
			           $(squares[4*5+col+1]).removeClass('square_unselected');
			           $(squares[4*5+col+1]).addClass('square_selected');
		           }
				 if($(squares[3*5+col]).hasClass('square_selected'))
		           {
			           $(squares[3*5+col]).removeClass('square_selected');
			           $(squares[3*5+col]).addClass('square_unselected');
		           }
		        else if($(squares[3*5+col]).hasClass('square_unselected'))
		           {
			           $(squares[3*5+col]).removeClass('square_unselected');
			           $(squares[3*5+col]).addClass('square_selected');
		           }
				 
			}else if(col == 0)
			{
				if($(squares[4*5+col+1]).hasClass('square_selected'))
		           {
			           $(squares[4*5+col+1]).removeClass('square_selected');
			           $(squares[4*5+col+1]).addClass('square_unselected');
		           }
		        else if($(squares[4*5+col+1]).hasClass('square_unselected'))
		           {
			           $(squares[4*5+col+1]).removeClass('square_unselected');
			           $(squares[4*5+col+1]).addClass('square_selected');
		           }
				 if($(squares[3*5+col]).hasClass('square_selected'))
		           {
			           $(squares[3*5+col]).removeClass('square_selected');
			           $(squares[3*5+col]).addClass('square_unselected');
		           }
		        else if($(squares[3*5+col]).hasClass('square_unselected'))
		           {
			           $(squares[3*5+col]).removeClass('square_unselected');
			           $(squares[3*5+col]).addClass('square_selected');
		           }
			}else if(col == 4)
			{
				if($(squares[4*5+col-1]).hasClass('square_selected'))
		           {
			           $(squares[4*5+col-1]).removeClass('square_selected');
			           $(squares[4*5+col-1]).addClass('square_unselected');
		           }
		        else if($(squares[4*5+col-1]).hasClass('square_unselected'))
		           {
			           $(squares[4*5+col-1]).removeClass('square_unselected');
			           $(squares[4*5+col-1]).addClass('square_selected');
		           }
				 if($(squares[3*5+col]).hasClass('square_selected'))
		           {
			           $(squares[3*5+col]).removeClass('square_selected');
			           $(squares[3*5+col]).addClass('square_unselected');
		           }
		        else if($(squares[3*5+col]).hasClass('square_unselected'))
		           {
			           $(squares[3*5+col]).removeClass('square_unselected');
			           $(squares[3*5+col]).addClass('square_selected');
		           }
			}
		}else
		{
			if(col == 0)
			{
				if($(squares[row*5+col+1]).hasClass('square_selected'))
		           {
			           $(squares[row*5+col+1]).removeClass('square_selected');
			           $(squares[row*5+col+1]).addClass('square_unselected');
		           }
		        else if($(squares[row*5+col+1]).hasClass('square_unselected'))
		           {
			           $(squares[row*5+col+1]).removeClass('square_unselected');
			           $(squares[row*5+col+1]).addClass('square_selected');
		           }
				 if($(squares[(row-1)*5+col]).hasClass('square_selected'))
		           {
			           $(squares[(row-1)*5+col]).removeClass('square_selected');
			           $(squares[(row-1)*5+col]).addClass('square_unselected');
		           }
		        else if($(squares[(row-1)*5+col]).hasClass('square_unselected'))
		           {
			           $(squares[(row-1)*5+col]).removeClass('square_unselected');
			           $(squares[(row-1)*5+col]).addClass('square_selected');
		           }
				 if($(squares[(row+1)*5+col]).hasClass('square_selected'))
		           {
			           $(squares[(row+1)*5+col]).removeClass('square_selected');
			           $(squares[(row+1)*5+col]).addClass('square_unselected');
		           }
		        else if($(squares[(row+1)*5+col]).hasClass('square_unselected'))
		           {
			           $(squares[(row+1)*5+col]).removeClass('square_unselected');
			           $(squares[(row+1)*5+col]).addClass('square_selected');
		           } 
			}else if(col == 4)
			{
				
				if($(squares[row*5+col-1]).hasClass('square_selected'))
		           {
			           $(squares[row*5+col-1]).removeClass('square_selected');
			           $(squares[row*5+col-1]).addClass('square_unselected');
		           }
		        else if($(squares[row*5+col-1]).hasClass('square_unselected'))
		           {
			           $(squares[row*5+col-1]).removeClass('square_unselected');
			           $(squares[row*5+col-1]).addClass('square_selected');
		           }
				 if($(squares[(row-1)*5+col]).hasClass('square_selected'))
		           {
			           $(squares[(row-1)*5+col]).removeClass('square_selected');
			           $(squares[(row-1)*5+col]).addClass('square_unselected');
		           }
		        else if($(squares[(row-1)*5+col]).hasClass('square_unselected'))
		           {
			           $(squares[(row-1)*5+col]).removeClass('square_unselected');
			           $(squares[(row-1)*5+col]).addClass('square_selected');
		           }
				 if($(squares[(row+1)*5+col]).hasClass('square_selected'))
		           {
			           $(squares[(row+1)*5+col]).removeClass('square_selected');
			           $(squares[(row+1)*5+col]).addClass('square_unselected');
		           }
		        else if($(squares[(row+1)*5+col]).hasClass('square_unselected'))
		           {
			           $(squares[(row+1)*5+col]).removeClass('square_unselected');
			           $(squares[(row+1)*5+col]).addClass('square_selected');
		           }
			}else
			{
				if($(squares[row*5+col+1]).hasClass('square_selected'))
		           {
			           $(squares[row*5+col+1]).removeClass('square_selected');
			           $(squares[row*5+col+1]).addClass('square_unselected');
		           }
		        else if($(squares[row*5+col+1]).hasClass('square_unselected'))
		           {
			           $(squares[row*5+col+1]).removeClass('square_unselected');
			           $(squares[row*5+col+1]).addClass('square_selected');
		           }
				if($(squares[row*5+col-1]).hasClass('square_selected'))
		           {
			           $(squares[row*5+col-1]).removeClass('square_selected');
			           $(squares[row*5+col-1]).addClass('square_unselected');
		           }
		        else if($(squares[row*5+col-1]).hasClass('square_unselected'))
		           {
			           $(squares[row*5+col-1]).removeClass('square_unselected');
			           $(squares[row*5+col-1]).addClass('square_selected');
		           }
				 if($(squares[(row-1)*5+col]).hasClass('square_selected'))
		           {
			           $(squares[(row-1)*5+col]).removeClass('square_selected');
			           $(squares[(row-1)*5+col]).addClass('square_unselected');
		           }
		        else if($(squares[(row-1)*5+col]).hasClass('square_unselected'))
		           {
			           $(squares[(row-1)*5+col]).removeClass('square_unselected');
			           $(squares[(row-1)*5+col]).addClass('square_selected');
		           }
				 if($(squares[(row+1)*5+col]).hasClass('square_selected'))
		           {
			           $(squares[(row+1)*5+col]).removeClass('square_selected');
			           $(squares[(row+1)*5+col]).addClass('square_unselected');
		           }
		        else if($(squares[(row+1)*5+col]).hasClass('square_unselected'))
		           {
			           $(squares[(row+1)*5+col]).removeClass('square_unselected');
			           $(squares[(row+1)*5+col]).addClass('square_selected');
		           }
			}
		}
	    //toggle the clicked square
		if($(this).hasClass('square_selected'))
		    {
			  $(this).removeClass('square_selected');
			  $(this).addClass('square_unselected');
		    }
		else if($(this).hasClass('square_unselected'))
		    {
			  $(this).removeClass('square_unselected');
			  $(this).addClass('square_selected');
		    }
		x=0;
		for(i=0;i<25;i++)
		{
			if($(squares[i]).hasClass('square_selected'))
			{
				x=1;
				break;
			}
		}
		if(x==0)
		{
			alert("YOU WON!");
		}
	});
	
	
	
});