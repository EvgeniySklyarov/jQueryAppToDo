$(document).ready(function () {

    var btn = $('.todo-btn');
    var todoList = $('.todo-list');

    btn.on('click', function (event) {
        event.preventDefault();

        var toAdd = $('.todo-input').val();

        if (toAdd !== '') {
            var bgColor = $('.color-item:checked').val();
            var containerElement = '<div class="checkbox-container"><input class="todo-checkbox" type="checkbox"></div>';
            var spanElement = '<span class="todo-text">' + toAdd +'</span>';

            todoList.append('<li class="todo-task">' + containerElement + spanElement + '</li>');
            $('.todo-task:last-child .checkbox-container').css('background-color', bgColor);
            $('.todo-task:last-child .todo-text').css('background-color', bgColor);

            $('.todo-input').val('');
        }
    });

    $(document).on('click','.todo-checkbox', function(e) {

        if (e.target.checked === true) {
            $('.todo-text').addClass('done');
        } else {
            $('.todo-text').removeClass('done');
        }
    });
});