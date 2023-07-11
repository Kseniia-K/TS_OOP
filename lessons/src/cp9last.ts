/**
  Плоттер поддерживает пять команд:

  1. Переместить каретку на некоторое расстояние
  в текущем направлении.
  2. Повернуть на определенное количество градусов
  по часовой стрелке или против часовой стрелки.
  3. Опустить или поднять каретку. Когда каретка опущена,
  плоттер при перемещении рисует линию.
  4. Установить цвет линии (один из черного, красного или зелёного).
  5. Установить начальную позицию каретки.
  
  Вы должны реализовать как минимум два класса:
  Plotter - основной класс
  LogToConsole - класс, который реализует интерфейс Logger,
  для логирования действий плоттера. LogToConsole должен выводить
  информацию в консоль.
 */

type Color = "чёрный" | "красный" | "зелёный";
type Distance = number;
type Angle = number;

interface Logger {
  log(message: string): void;
}

class Plotter {
  private logger: Logger;

  private position: [number, number];
  private direction: number;
  private isCarrigeDown: boolean;
  private color: Color;

  constructor(logger: Logger) {
    this.logger = logger;
    this.position = [0, 0];
    this.direction = 0;
    this.isCarrigeDown = false;
    this.color = "чёрный";
  }
  public carriageUp(): void {
    this.isCarrigeDown = false;
    this.logger.log("Поднимаем каретку.");
  }
  public carriageDown(): void {
    this.isCarrigeDown = true;
    this.logger.log("Опускаем каретку.");
  }

  public move(distance: Distance): void {
    const [x, y] = this.position;
    const dx = Math.cos(this.direction) * distance;
    const dy = Math.sin(this.direction) * distance;
    const newPosition: [number, number] = [x + dx, y + dy];
    
    if(this.isCarrigeDown) {
        this.drawLine(this.position, newPosition, this.color);
  }
  
  this.position = newPosition;
  this.logger.log(`Чертим линию из (${Math.round(x)}, ${Math.round(y)}) в (${Math.round(newPosition[0])}, ${Math.round(newPosition[1])}), используя ${this.color} цвет.`);
  }
  
  public turn(angle: number): void {
    this.direction += (angle / 180) * Math.PI;
    this.logger.log(`Поворачиваем на ${angle} градусов.`);
  }

  public setColor(color: string): void {
    if(color == "green") {
      this.color = "зелёный";
    }
    else if(color = "red") {
      this.color = "красный";
    }
    else if(color == "black") {
      this.color = "чёрный";
    }
    
    this.logger.log(`Устанавливаем ${color} цвет линии.`);
  }

  public setPosition(position: [number, number]): void {
    this.position = position;
    this.logger.log(`Устанавливаем начальную позицию каретки в (${position[0]}, ${position[1]}).`);
  }

  private drawLine(start: [number, number], end: [number, number], color: Color): void{}
}

class LogToConsole implements Logger {
  public log(message: string): void {
    console.log(message);
  }
}

function drawTriangle(plt: Plotter, size: Distance): void {
  plt.setColor("green");
  for(let i = 0; i < 3; ++i) {
    plt.carriageDown();
    plt.move(size);
    plt.carriageUp();
    plt.turn(120.0);
  }
}

const plotter = new Plotter(new LogToConsole());
plotter.setPosition([0, 0]);
drawTriangle(plotter, 100.0);