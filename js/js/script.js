/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addingInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('input[type="checkbox"]');
    
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = "драма";
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const templateMovieItem = (name, index) => {
        return `
            <li class="promo__interactive-item">${index+1} ${name}
                <div class="delete"></div>
            </li>
        `;
    };
    
    const createMovieList = (films, parent) => {
        parent.innerHTML = "";
        films.forEach((film, i) => {
            parent.innerHTML += templateMovieItem(film,i);    
        });
    };

    const renderMovieList = () => {
        sortArr(movieDB.movies);
        console.log(movieDB.movies.sort());
        createMovieList(movieDB.movies, movieList);
        addEventListenerForDeleteBtns();
    };
    
    const addMovies = () => {
        const newFilm = addingInput.value;

        if(newFilm){
            let filmName = newFilm.length > 21
                ? `${newFilm.substring(0, 22)}...`
                : newFilm;

            movieDB.movies.push(filmName);

            if(checkbox.checked){
                console.log("Сделать любимым");
            }
        }        
    };
    
    const deleteMovie = (i) => {
        movieDB.movies.splice(i,1);
    };
    
    const addEventListenerForDeleteBtns = () => {    
        movieList.querySelectorAll('.delete').forEach((btn, index) => {
            btn.addEventListener('click',() => {
                deleteMovie(index);
                renderMovieList();
            });
        });
    };
    
    const sortArr = (arr) => {
        arr.sort(); 
    };
    
    const initPage = () => {
        deleteAdv(adv);    
        renderMovieList();    
        makeChanges();    
        addForm.addEventListener('submit',(e) => {
            e.preventDefault();
            addMovies();
            renderMovieList(); 
            e.target.reset();           
        });
    };
    
    initPage();
});

