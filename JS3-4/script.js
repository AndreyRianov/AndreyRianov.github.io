function init() {

    var wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    document.body.appendChild(wrapper);

    var header = document.createElement('header');
    header.innerHTML = '<p>Тест по программированию</p>';
    wrapper.insertBefore(header, wrapper.children[1]);

    var question = document.createElement('form');
    question.className = 'question';
    wrapper.insertBefore(question, wrapper.children[2]);

    function createQuestionTitle(text, position) {
        var title = document.createElement('p');
        title.className = 'question__title';
        title.innerHTML = text;
        question.insertBefore(title, question.children[position]);
        return title;
    }

    function createCheckBox(name, title) {
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = name;
        checkbox.value = "value";
        checkbox.id = "id";
        var label = document.createElement('label');
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(title));
        return label;
    }

    var button = document.createElement('button');
    button.type = 'submit';
    button.className = 'question__button';
    button.innerHTML = "Проверить мои результаты";
    button.name = "question__button";
    button.onclick = function() {
        alert('Try again');
    };

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            question.appendChild(createCheckBox('question_' + (i + 1), 'Вариант ответа №' + (j + 1)));
        }
    }

    var count = 0;

    for (var k = 0; k < 3; k++) {
        createQuestionTitle('Вопрос №' + (k + 1), count);
        count += 4;
    }

    question.appendChild(button);



}

window.onload = init;
