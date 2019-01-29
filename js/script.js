$(document).ready(function () {

    var btn = $('.todo-btn');
    var todoList = $('.todo-list');

    var userCheckColor = function(colorList) {
        var color = '';

        $.each(colorList, function (i, item) {
            if (item.checked) {
                item.checked = false;
                return color = item.value;
            }
        });
        
        return color;
    };

    var randomCheckColor = function (colorList) {
        var randomIndex = Math.round(Math.random() * (colorList.length - 1));
        return colorList[randomIndex].value;
    };

    btn.on('click', function (event) {
        event.preventDefault();

        var toAdd = $('.todo-input').val();

        if (toAdd.trim() !== '') {
            toAdd = toAdd.replace(/</g, "&lt;");
            var containerElement = '<div class="checkbox-container"><input class="todo-checkbox" type="checkbox"></div>';
            var spanElement = '<span class="todo-text">' + toAdd +'</span>';
            var colorList = $('.color-item');
            var bgColor = userCheckColor(colorList) || randomCheckColor(colorList);    

            todoList.append('<li class="todo-task">' + containerElement + spanElement + '</li>');
            $('.todo-task:last-child .checkbox-container').css('background-color', bgColor);
            $('.todo-task:last-child .todo-text').css('background-color', bgColor);
            $('.todo-input').val('');     
        } else {
            $('.todo-input').val('');
        }
    });

    $(document).on('click','.todo-checkbox', function(e) {
        if (e.target.checked === true) {
            $(this).parent().next('.todo-text').addClass('done');
        } else {
            $(this).parent().next('.todo-text').removeClass('done');
        }
    });
});