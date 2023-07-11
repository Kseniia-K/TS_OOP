// чтение с клавиатуры и вывод в терминал
// чтение из файла и вывод в терминал
// чтение с клавиатуры и отправка данных по сети
// чтение из файла и отправка данных по сети
// чтение с клавиатуры и запись в файл
// получение данных из сети и вывод в терминал
// получение данных из сети и запись в файл

// let message: string

// function readFromFile(): string{
// 	return "Зачитали из файла"
// }
// function readFromKeyboard(): string{
// 	return "Зачитали с клавиатуры"
// }
// function getFromNet(): string{
// 	return "Получили данные из сети"
// }

// function printToTerminal(message: string): void{
//   console.log(`Вывели в терминал: ${message}`)
// }
// function sendViaNet(message: string): void{
//   console.log(`Отправили по сети: ${message}`)
// }
// function writeInFile(message: string): void{
//   console.log(`Записали в файл: ${message}`)
// }

// function main(input: string, output: string): void{
  
//   // Вариант 1
  
//   if(input == "keyboard" && output == "terminal")
//     printToTerminal(message = readFromKeyboard())
//   if(input == "file" && output == "terminal")
//     printToTerminal(message = readFromFile())
//   if(input == "keyboard" && output == "net")
//     sendViaNet(message = readFromKeyboard())
//   if(input == "file" && output == "net")
//     sendViaNet(message = readFromFile())
//   if(input == "keyboard" && output == "inFile")
//     writeInFile(message = readFromKeyboard())
//   if(input == "net" && output == "terminal")
//     printToTerminal(message = getFromNet())
//   if(input == "net" && output == "inFile")
//     writeInFile(message = getFromNet())

  // Вариант 2
  
  // if(input == "keyboard")
  //   if(output == "terminal")
  //     printToTerminal(message = readFromKeyboard())
  //   else if(output == "net")
  //     sendViaNet(message = readFromKeyboard())
  //   else
  //     writeInFile(message = readFromKeyboard())
  // else if(input == "file")
  //   if(output == "terminal")
  //     printToTerminal(message = readFromFile())
  //   else
  //     sendViaNet(message = readFromFile())
  // else
  //   if(output == "terminal")
  //     printToTerminal(message = getFromNet())
  //   else
  //     writeInFile(message = getFromNet())

// main("keyboard", "terminal")
// main("file", "terminal")
// main("keyboard", "net")
// main("file", "net")
// main("keyboard", "inFile")
// main("net", "terminal")
// main("net", "inFile")