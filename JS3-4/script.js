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

    function crQuestionTitle(text, className, position) {
        var t = document.createElement('p');
        t.className = className;
        t.innerHTML = text;
        question.insertBefore(t, question.children[position]);
        return t;
    }

    function crCheckBox(name, title) {
        var ie = !!document.releaseCapture;
        var c = document.createElement(ie ? ['<input name="', name, '" />'].join('') : 'input');
        if (!ie) c.name = name;
        c.type = 'checkbox';
        var l = document.createElement('label');
        l.appendChild(c);
        l.appendChild(document.createTextNode(title));
        return l;
    }



    var button = document.createElement('button');
    button.type = 'submit';
    button.className = 'question__button';
    button.innerHTML = "Проверить мои результаты";
    button.name = "question__button";
    button.onclick = function() {alert( 'Try again' );};


    question.appendChild(crCheckBox('question_1', 'Вариант ответа №1'));
    question.appendChild(crCheckBox('question_2', 'Вариант ответа №2'));
    question.appendChild(crCheckBox('question_3', 'Вариант ответа №3'));
    question.appendChild(crCheckBox('question_4', 'Вариант ответа №1'));
    question.appendChild(crCheckBox('question_5', 'Вариант ответа №2'));
    question.appendChild(crCheckBox('question_6', 'Вариант ответа №3'));
    question.appendChild(crCheckBox('question_7', 'Вариант ответа №1'));
    question.appendChild(crCheckBox('question_8', 'Вариант ответа №2'));
    question.appendChild(crCheckBox('question_9', 'Вариант ответа №3'));

    crQuestionTitle('Вопрос №1', 'question__title', 0);
    crQuestionTitle('Вопрос №2', 'question__title', 4);
    crQuestionTitle('Вопрос №3', 'question__title', 8);

    question.appendChild(button);

}

window.onload = init;
