// jQuery Doc Ready
$(function () {
    // Set up some data and variables
    const data = [];
        input = $('.input');
        filter = $('#filter');
        reduce = $('#reduce');
        map = $('#map');
        every = $('#every');
        some = $('#some');
        find = $('#find');

    

    //Reduce takes an array of values and reduces them to a single value after running a callback function on each element.
    reduce.on('click', function () {
        // Grab the input value and parse it into a number
        $('.input').each(function(){data.push(parseInt($(this).val()))})
        let reduceData = data.reduce((acc, curr) =>  acc + curr, 0);
        $('#reduceResult').text(reduceData);
        $('.input').val('');
        dataArrayClear();
    });

    //Filter takes an array of values and removes elements which do not meet the criteria drefined in a callback function on each element.
    filter.on('click', function () {
        $('.input').each(function(){data.push(parseInt($(this).val()))})
        let filterData = data.filter(e => e >= 80);
        $('#filterResult').text(filterData.toString());
        $('.input').val('');
        dataArrayClear();
    })

    //Map takes an array of values and runs a callback function on each element, after which the result of each is added to a new array.  The returned array should be the same length as the initial array.
    map.on('click', function() {
        $('.input').each(function(){data.push(parseFloat($(this).val()))})
        let mapData = data.map(e => ((e - 32) / 1.8).toFixed(1));
        $('#mapResult').text(mapData);
        $('.input').val('');
        dataArrayClear();
    })

    //Every takes an array of values and runs a callback on each element, returning true if every element returns true from the callback function.
    every.on('click', function() {
        $('.input').each(function(){data.push(parseInt($(this).val()))})
        let everyData = data.every(e => e >= 80);
        $('#everyResult').text(everyData);
        $('.input').val('');
        dataArrayClear();
    })

    //Some takes an array of values and runs a callback on each element, returning true if any given element returns true from the callback function.
    some.on('click', function() {
        $('.input').each(function(){data.push(parseInt($(this).val()))})
        let someData = data.some(e => e >= 80);
        $('#someResult').text(someData);
        $('.input').val('');
        dataArrayClear();
    })

    //Find takes an array and returns the value if a match is found in the callback function.
    find.on('click', function () {
        $('.input').each(function(){data.push($(this).val())})
        const findData = data.find(e => e == 80);
        if (findData == undefined) {
            $('#findResult').text(`the value 80 was not found`);
        } else {
            $('#findResult').text(`the value ${findData} was found`);
        }
        $('.input').val('');
        dataArrayClear();
    })

    function dataArrayClear () {
        while(data.length > 0) {
            data.pop();
        }
    }      
});