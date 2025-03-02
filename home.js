class HomePage extends Phaser.Scene {
    constructor() {
        super({ key: 'HomePage' });
    }

    create() {
        // Title
        this.add.text(800, 300, 'Hello Everyone! Welcome To A Collection Hand Programmed Games That Totally do not Depict Aarav and Ruhann in many different ways', {
            fontSize: '84px',
            fill: '#fff'
        }).setOrigin(0.5);

        // Start button
        const startButton = this.add.text(800, 500, 'Start Platformer Game', {
            fontSize: '32px',
            fill: '#fff'
        }).setOrigin(0.5)
        .setInteractive()
        .setPadding(10)
        .setStyle({
            backgroundColor: '#111'
        });

        startButton.on('pointerdown', () => {
            this.scene.start('StartScreen');
        });
    }
}