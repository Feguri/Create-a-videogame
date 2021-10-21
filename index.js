function getInfo(){
    const videoGameName = document.getElementById('name').value;
    const language = document.getElementById('language').value;
    const tools = document.getElementById('tools').value;
    const style = document.getElementById('style').value;
    const type = document.getElementById('type').value;
    const description = document.getElementById('description').value;
    const BgColor = document.getElementById('color').value;
    const color = document.getElementById('color2').value;

    // document.getElementById('form').remove();

    document.getElementById('videogame-name').innerHTML = videoGameName;
    document.getElementById('description-game').innerHTML = description;
    document.getElementById('programming-language').innerHTML = language;
    document.getElementById('style-game').innerHTML = style;
    document.getElementById('type-game').innerHTML = type;
    document.getElementById('tools-game').innerHTML = tools;
    document.getElementById('submit').value = 'Update';
    document.getElementById('bg').style.backgroundColor = BgColor;
    document.getElementById('bg').style.color = color;

    document.getElementById('colors').style.display = "block";
    document.getElementById('result').style.display = "block";


}

document.getElementById('submit').addEventListener('click', getInfo);
