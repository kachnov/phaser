//  This singleton is instantiated as soon as Phaser loads,
//  before a Phaser.Game instance has even been created.
//  Which means all instances of Phaser Games can share it,
//  without having to re-poll the device all over again

/**
 * @namespace Phaser.Device
 */

module.exports = {

    os: require('./OS'),
    browser: require('./Browser'),
    features: require('./Features'),
    input: require('./Input'),
    audio: require('./Audio'),
    video: require('./Video'),
    fullscreen: require('./Fullscreen'),
    canvasFeatures: require('./CanvasFeatures')

};
