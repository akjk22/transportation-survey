$(document).ready(function(event) {

    $("form").submit(function(event) {
        event.preventDefault();
        $("#work-responses").show();

        let resultArray = [];
        $("input:checkbox[name=work-transportation]:checked").each(function() {
            let workTransportationMode = $(this).val();
            resultArray.push($(this).val());
            $("#work-responses").append(workTransportationMode + "</br>");
        });

        
        $("input:checkbox[name=fun-transportation]:checked").each(function() {
            let funTransportationMode = $(this).val();
            $("#fun-responses").append(funTransportationMode + "<br>");
        });

        console.log(resultArray);

        $("#transportation_survey").hide();        
    });

});