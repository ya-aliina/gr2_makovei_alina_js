$(document).ready(function() {

    let email = 'a.s.makovei@gmail.com';
    let apiKey = 'AIzaSyCcBStPo4kK0hQxKX-poIngqKnP0O-k_uE';
    let startDate = '2021-11-15T10:00:00-00:00';
    let lastDate = '2021-11-20T10:00:00-00:00';
    let url = `https://www.googleapis.com/calendar/v3/calendars/${email}/events?key=${apiKey}&singleEvents=true&orderBy=starttime&timeMin=${startDate}&timeMax=${lastDate}`;

    let content;
    let summary = [];
    let blocks = [];

    let imageUrl = 'https://elena-baxter.com/wp-content/uploads/2019/01/nedel.jpg';

    //получение и бработка данных
    async function getCalendarInformationAndCreateBlocks(url) {
        let response = await fetch(url);
        content = await response.json();
        content = await content.items;
        await createBlock(content);
        return blocks;
    }

    getCalendarInformationAndCreateBlocks(url)
        .then((blocks) => {
            for (let i = 0; i < blocks.length; i++) {
                let block = blocks[i];
                document.body.append(block);
            }
        })

    //вставка блоков с информацией
    async function createBlock(json) {
        for (let i = 0; i < json.length; i++) {
            let block = document.createElement('div');
            block.setAttribute('id', `${i}`); //а надо ли???
            blocks.push(block);

            block.style.margin = '0 auto';
            block.style.marginBottom = '15px';
            block.style.maxWidth = '500px'

            getEventInformation(json[i], i, block);
            addImage(imageUrl, block);
            addButtonAlert(block);
            addButtonDelete(block);
        }
    }

    //получаем информацию о событиях
    async function getEventInformation(json, i, block) {
        let name;
        let description;
        for ([name, description] of Object.entries(json)) {
            if (typeof (description) === 'object') {
                getEventInformation(description, i, block);
            } else {
                let info = document.createElement('div')
                info.append(`${name}: ${description}`); //создаем 'обертку' для каждого пункта

                info.style.color = '#002137';
                info.style.fontSize = '18px';
                info.style.fontWeight = 'semi-bold';
                info.style.paddingBottom = '8px';
                info.style.width = '100%'

                block.append(info);
            }
            if (name === 'summary') {
                summary.push((`${description}`))
            }
        }
    }

    async function addImage(image, block) {
        let imgBlock = document.createElement('img');
        imgBlock.setAttribute('src', imageUrl);
        imgBlock.style.width = '100%';
        block.prepend(imgBlock);
    }

    //кнопки
    async function addButtonAlert(block) {
        let buttonAlert = document.createElement('button');

        buttonAlert.innerHTML = 'Показать событие';
        buttonAlert.style.width = '100%';
        buttonAlert.style.marginBottom = '10px'

        block.append(buttonAlert);

        buttonAlert.onclick = function () {
            let index = this.parentNode.getAttribute('id')
            alert(summary[index]);
        }
    }

    async function addButtonDelete(block) {
        let buttonDelete = document.createElement('button');
        buttonDelete.innerHTML = 'Удалить событие';
        buttonDelete.style.width = '100%';
        buttonDelete.style.marginBottom = '10px'

        block.append(buttonDelete);

        buttonDelete.onclick = function () {
            let parent = this.parentNode;
            parent.remove();
        }
    }
})
