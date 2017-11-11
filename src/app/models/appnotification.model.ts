export class AppNotification{
    toshow: boolean;
    description: string;
    duration: number;
    constructor() {
    this.toshow = false;
    }
    setText(text){
    this.description = text;
    }
    setDuration(duration){
    this.duration = duration;
    }
    
}