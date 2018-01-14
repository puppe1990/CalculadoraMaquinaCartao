
function valorDebitoPagSeguro(valor){

    	total = valor - (valor * 2.39) / 100;
    	return total.toFixed(2);
}

//Visa, Master, Elo - Acréscimo de 2,99% ao mês
function valorCreditoPagSeguro(valor, parcela){

		if(parcela === 1){
    		total = valor - (valor * 4.99) / 100;
    		return total.toFixed(2);
    	}else if(parcela === 2){
    		total = valor - (valor * 5.59) / 100;
    		return total.toFixed(2);
    	}else{
    		parcela = parcela - 2;
    		total = valor - (valor * (5.59 + (2.99 * parcela))) / 100;
    		return total.toFixed(2);
    	}
}

function valorDinheiroPagSeguro(valor, porcentagem){

    total = valor - (valor * porcentagem) / 100;
    return total.toFixed(2);
}   


$(document).ready(function(){


	$('#submit').click(function(){
			// $('#limpar').click(function(){
			$("tbody td").remove();
			// });

	        var valor = $("#valor").val();
	        //var parcela = $("#parcela").val();
	        var descontoDebito = valorDebitoPagSeguro(valor);
	        var diferencaDebito = valor - descontoDebito;

	        $( "#valores tbody" ).append("<tr>");
	        $( "#valores tbody" ).append("<td>Débito</td>");
	        $( "#valores tbody" ).append("<td>1X</td>");
	        $( "#valores tbody" ).append("<td>1X R$"+valor+"</td>");
		    $( "#valores tbody" ).append("<td>R$"+valorDebitoPagSeguro(valor)+"</td>");
		    $( "#valores tbody" ).append("<td>R$"+diferencaDebito.toFixed(2)+"</td>");
		    $( "#valores tbody" ).append("<td>Única</td>");
		    $( "#valores tbody" ).append("<td>MasterCard, Visa e Elo, Banri</td>");
		    $( "#valores tbody" ).append( "</tr>");

		    for (var parcela = 1;parcela <= 5;parcela++) {

		    	var descontoCredito = valorCreditoPagSeguro(valor, parcela);
	        	var diferencaCredito = valor - descontoCredito;
	        	var valorParcela = valor / parcela;

		    	$( "#valores tbody" ).append("<tr>");
		        // $( "#valores tbody" ).append("<td id=tr"+parcela+">Crédito</td>");
		        $( "#valores tbody" ).append("<td id=tr>Crédito</td>");
	        	$( "#valores tbody" ).append("<td>"+parcela+"X</td>");
	        	$( "#valores tbody" ).append("<td>"+parcela+"X R$"+valorParcela.toFixed(2)+"</td>");
			    $( "#valores tbody" ).append("<td>R$"+valorCreditoPagSeguro(valor, parcela)+"</td>");
		    	$( "#valores tbody" ).append("<td>R$"+diferencaCredito.toFixed(2)+"</td>");
			    $( "#valores tbody" ).append("<td>"+parcela+"</td>");
			    $( "#valores tbody" ).append("<td>MasterCard, Visa e Elo</td>");
			    $( "#valores tbody" ).append( "</tr>");	    

			    
		    }

		    if(valor > 100 && valor < 250){

		    	var descontoDinheiro = valorDinheiroPagSeguro(valor,5);
		    	var diferencaDinheiro = valor - descontoDinheiro;

		    	$( "#valores tbody" ).append("<tr>");
		        $( "#valores tbody" ).append("<td>Dinheiro</td>");
		        $( "#valores tbody" ).append("<td>1X</td>");
	        	$( "#valores tbody" ).append("<td>1X R$"+valor+"</td>");
			    $( "#valores tbody" ).append("<td><h3><b>R$"+descontoDinheiro+"</b></h3></td>");
		    	$( "#valores tbody" ).append("<td>R$"+diferencaDinheiro.toFixed(2)+"</td>");
			    $( "#valores tbody" ).append("<td>Única</td>");
			    $( "#valores tbody" ).append("<td>Única</td>");
			    $( "#valores tbody" ).append( "</tr>");	   
		    }else if(valor >= 250){

		    	var descontoDinheiro = valorDinheiroPagSeguro(valor,7.5);
		    	var diferencaDinheiro = valor - descontoDinheiro;

		    	$( "#valores tbody" ).append("<tr>");
		        $( "#valores tbody" ).append("<td>Dinheiro</td>");
		        $( "#valores tbody" ).append("<td>1X</td>");
	        	$( "#valores tbody" ).append("<td>1X R$"+valor+"</td>");
			    $( "#valores tbody" ).append("<td><h4><b>R$"+descontoDinheiro+"</b></h4></td>");
		    	$( "#valores tbody" ).append("<td>R$"+diferencaDinheiro.toFixed(2)+"</td>");
			    $( "#valores tbody" ).append("<td>Única</td>");
			    $( "#valores tbody" ).append("<td>Única</td>");
			    $( "#valores tbody" ).append( "</tr>");	   
		    }else{

		    	$( "#valores tbody" ).append("<tr>");
		        $( "#valores tbody" ).append("<td>Dinheiro</td>");
		        $( "#valores tbody" ).append("<td>1X</td>");
	        	$( "#valores tbody" ).append("<td>1X R$"+valor+"</td>");
			    $( "#valores tbody" ).append("<td>Não tem desconto</td>");
		    	$( "#valores tbody" ).append("<td>Não tem desconto</td>");
			    $( "#valores tbody" ).append("<td>Única</td>");
			    $( "#valores tbody" ).append("<td>Única</td>");
			    $( "#valores tbody" ).append( "</tr>");	   
		    }

		    if(valor < 100){
				$("tbody td" ).eq( 45 ).css( {"border-color": "black", 
											  "border-width":"1px", 
											  "border-style":"solid",
											   "color":"red",
											   "font-weight": "bold"} );
			}else if(valor >= 100 && valor < 250){
				$("tbody td" ).eq( 15 ).css( {"border-color": "black", 
											  "border-width":"1px", 
											  "border-style":"solid",
											  "color":"green",
											  "font-weight": "bold"} );
			}else if(valor >= 250 && valor <= 300){
				$("tbody td" ).eq( 22 ).css( {"border-color": "black", 
											  "border-width":"1px", 
											  "border-style":"solid",
											  "color":"green",
											  "font-weight": "bold"} );
			}else if(valor > 300 && valor < 700){
				$("tbody td" ).eq( 22 ).css( {"border-color": "black", 
											  "border-width":"1px", 
											  "border-style":"solid",
											  "color":"green",
											  "font-weight": "bold"} );

				$("tbody td" ).eq( 29 ).css( {"border-color": "black", 
											  "border-width":"1px", 
											  "border-style":"solid",
											  "color":"red",
											  "font-weight": "bold"} );
			}else{
				$("tbody td" ).eq( 29 ).css( {"border-color": "black", 
											  "border-width":"1px", 
											  "border-style":"solid",
											  "color":"green",
											  "font-weight": "bold"} );

				$("tbody td" ).eq( 36 ).css( {"border-color": "black", 
											  "border-width":"1px", 
											  "border-style":"solid",
											  "color":"red",
											  "font-weight": "bold"} );
			}	

	    });




});
