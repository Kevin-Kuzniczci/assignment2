let language = prompt("Please select a language code: Spanish(es), French(fr), German(de), etc.")

switch (language) {
    case "es":
        document.write("Hello World translated in Spanish is: Hola Mundo!")
        break
    case "fr":
        document.write("Hello World translated in French is: Bonjour le monde!")
        break
    case "de":
        document.write("Hello World translated in German is: Hallo Welt!")
        break
    default:
        document.write("Hello World translated in English is: 'Ello Worl!")
}