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
        var magic = !!document.releaseCapture;
        var creating = document.createElement(magic ? ['<input name="', name, '" />'].join('') : 'input');
        if (!magic) creating.name = name;
        creating.type = 'checkbox';
        var label = document.createElement('label');
        label.appendChild(creating);
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

    var question__obj = {
        "question_1": {
            "Вариан ответа №1": {},
            "Вариан ответа №2": {},
            "Вариан ответа №3": {}
        },
        "question_2": {
            "Вариан ответа №1": {},
            "Вариан ответа №2": {},
            "Вариан ответа №3": {}
        },
        "question_3": {
            "Вариан ответа №1": {},
            "Вариан ответа №2": {},
            "Вариан ответа №3": {}
        }
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
