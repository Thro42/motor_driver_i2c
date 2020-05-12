
namespace pins {
     //% block
    export function MotorRunI2C (chanel: number, speed: number): void {
        let buf = pins.createBuffer(3);
    if (speed >= 0) {
            buf[0] = 2;
        } else {
            buf[0] = 3;
        }
        buf[1] = chanel;
        if (speed >= 0) {
            buf[2] = speed;
        } else {
            buf[2] = speed * -1;
        }
        pins.i2cWriteBuffer(0x14, buf);
    }
}
