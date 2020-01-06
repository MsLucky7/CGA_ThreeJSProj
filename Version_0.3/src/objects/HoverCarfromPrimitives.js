class HoverCar extends THREE.Group {



    constructor(xPos, yPos, zPos, xRot, yRot, zRot, xSize, ySize, zSize) {
        super();

        this.animations = new Array();
        this.assemble(xPos, yPos, zPos, xRot, yRot, zRot, xSize, ySize, zSize);

    
    }

    assemble(xPos, yPos, zPos, xRot, yRot, zRot, xSize, ySize, zSize) {
        
        var car = new THREE.Group();

        var CarCoatDiff = new THREE.TextureLoader().load("src/images/Metal28_col.jpg");
        //var CarCoatDMetal = new THREE.TextureLoader().load("src/images/Metal28_met.jpg");
        var CarCoatRough = new THREE.TextureLoader().load("src/images/Metal28_rgh.jpg");
        var CarCoatNormal = new THREE.TextureLoader().load("src/images/Metal28_nrm.jpg");
        var carCoat = new THREE.MeshPhongMaterial({
            map: CarCoatDiff,
            normalMap: CarCoatNormal,
            specularMap: CarCoatRough,
        });

        var wheelCol = new THREE.MeshPhongMaterial({color: 0xC0C0C0, specular: 0xd8d8d8, shininess: 80});

        var lampCol = new THREE.MeshPhongMaterial({
            color: 0xffff00, 
            specular: 0xd8d8d8, 
            shininess: 80, 
            emissive: 0xffd700, 
            emissiveIntensity: 50
        });

        var windowCol = new THREE.MeshPhongMaterial({color: 0x000000, specular: 0xFFFFFF, shininess: 80});
        
        var corpusGeo01 = new THREE.BoxGeometry(20 * xSize, 50 * ySize, 5 * zSize);
        var corpus01 =  new THREE.Mesh(corpusGeo01, carCoat);
        corpus01.position.set(xPos, yPos, zPos);
        corpus01.rotation.x = 90 * DEG_TO_RAD;
        corpus01.name = "Corpus01";
        car.add(corpus01);

        

        var corpusGeo02 = new THREE.BoxGeometry(20 * xSize, 26 * ySize, 5 * zSize);
        var corpus02 =  new THREE.Mesh(corpusGeo02, carCoat);
        corpus02.position.set(xPos, yPos - (5 * ySize), zPos);
        corpus02.rotation.x = 90 * DEG_TO_RAD;
        corpus02.name = "Corpus02";
        car.add(corpus02);

        var cT2 = {
            movingCorpus02: new TWEEN.Tween(corpus02.position).to(new THREE.Vector3(corpus02.position.x + 600, corpus02.position.y + 60, corpus02.position.z), 2000)
        }
        corpus02.userData = cT2;
        
        var corpusGeo03 = new THREE.BoxGeometry(10 * xSize, 10 * ySize, 5 * zSize);
        var corpus03 =  new THREE.Mesh(corpusGeo03, carCoat);
        corpus03.position.set(xPos, yPos - (5* ySize), zPos + (18 * zSize));
        corpus03.rotation.x = 90 * DEG_TO_RAD;
        corpus03.name = "Corpus03";
        car.add(corpus03);
        var corpus04 =  new THREE.Mesh(corpusGeo03, carCoat);
        corpus04.position.set(xPos, yPos - (5 * ySize), zPos - (18 * zSize));
        corpus04.rotation.x = 90 * DEG_TO_RAD;
        corpus04.name = "Corpus04";
        car.add(corpus04);

        var corpusGeo04 = new THREE.BoxGeometry(20 * xSize, 2 * ySize, 5 * zSize);
        var corpus05 =  new THREE.Mesh(corpusGeo04, carCoat);
        corpus05.position.set(xPos, yPos - (5 * ySize), zPos + (24 * zSize));
        corpus05.rotation.x = 90 * DEG_TO_RAD;
        corpus05.name = "Corpus05";
        car.add(corpus05);
        var corpus06 =  new THREE.Mesh(corpusGeo04, carCoat);
        corpus06.position.set(xPos, yPos - (5 * ySize), zPos - (24 * zSize));
        corpus06.rotation.x = 90 * DEG_TO_RAD;
        corpus06.name = "Corpus06";
        car.add(corpus06);

        var corpusGeo05 = new THREE.BoxGeometry(18 * xSize, 20 * ySize, 10 * zSize);
        var corpus07 =  new THREE.Mesh(corpusGeo05, carCoat);
        corpus07.position.set(xPos, yPos + (5* ySize), zPos - (5 * zSize));
        corpus07.rotation.x = 90 * DEG_TO_RAD;
        corpus07.name = "Corpus07";
        car.add(corpus07);


        var wheelAxleGeo = new THREE.CylinderGeometry(1 * xSize, 1 * ySize, 30 * zSize, 32, 1, false);
        var wheelAxle01 =  new THREE.Mesh(wheelAxleGeo, wheelCol);
        wheelAxle01.position.set(xPos, yPos - (5* ySize), zPos - (18 * zSize));
        //wheelAxle01.rotation.set(xRot, yRot, zRot);
        wheelAxle01.rotation.x = 90 * DEG_TO_RAD;
        wheelAxle01.rotation.z = 90 * DEG_TO_RAD;
        wheelAxle01.name = "WheelAxle01";
        car.add(wheelAxle01);
        var wheelAxle02 =  new THREE.Mesh(wheelAxleGeo, wheelCol);
        wheelAxle02.position.set(xPos, yPos - (5* ySize), zPos + (18 * zSize));
        //wheelAxle02.rotation.set(xRot, yRot, zRot);
        wheelAxle02.rotation.x = 90 * DEG_TO_RAD;
        wheelAxle02.rotation.z = 90 * DEG_TO_RAD;
        wheelAxle02.name = "WheelAxle02";
        car.add(wheelAxle02);
        
        var wheelHolder = new THREE.BoxGeometry(4 * xSize, 5 * ySize, 4 * zSize);
        var wheelHolder01 =  new THREE.Mesh(wheelHolder, wheelCol);
        wheelHolder01.position.set(xPos + (14 * xSize), yPos - (6* ySize), zPos - (18 * zSize));
        wheelHolder01.rotation.set(xRot, yRot, zRot);
        wheelHolder01.name = "WheelHolder01";
        car.add(wheelHolder01);
        var wheelHolder02 =  new THREE.Mesh(wheelHolder, wheelCol);
        wheelHolder02.position.set(xPos - (14 * xSize), yPos - (6* ySize), zPos - (18 * zSize));
        wheelHolder02.rotation.set(xRot, yRot, zRot);
        wheelHolder02.name = "WheelHolder02";
        car.add(wheelHolder02);
        var wheelHolder03 =  new THREE.Mesh(wheelHolder, wheelCol);
        wheelHolder03.position.set(xPos - (14 * xSize), yPos - (6* ySize), zPos + (18 * zSize));
        wheelHolder03.rotation.set(xRot, yRot, zRot);
        wheelHolder03.name = "WheelHolder03";
        car.add(wheelHolder03);
        var wheelHolder04 =  new THREE.Mesh(wheelHolder, wheelCol);
        wheelHolder04.position.set(xPos + (14 * xSize), yPos - (6* ySize), zPos + (18 * zSize));
        wheelHolder04.rotation.set(xRot, yRot, zRot);
        wheelHolder04.name = "WheelHolder04";
        car.add(wheelHolder04);

        var wheelGeo = new THREE.CylinderGeometry(10 * xSize, 10 * ySize, 4 * zSize, 32, 1, false);
        var wheel01 =  new THREE.Mesh(wheelGeo, wheelCol);
        wheel01.position.set(xPos + (14 * xSize), yPos - (10 * ySize), zPos - (18 * zSize));
        wheel01.rotation.set(xRot, yRot, zRot);
        wheel01.name = "Wheel01";
        car.add(wheel01);
        var wheel02 =  new THREE.Mesh(wheelGeo, wheelCol);
        wheel02.position.set(xPos - (14 * xSize), yPos - (10 * ySize), zPos - (18 * zSize));
        wheel02.rotation.set(xRot, yRot, zRot);
        wheel02.name = "Wheel02";
        car.add(wheel02);
        var wheel03 =  new THREE.Mesh(wheelGeo, wheelCol);
        wheel03.position.set(xPos - (14 * xSize), yPos - (10 * ySize), zPos + (18 * zSize));
        wheel03.rotation.set(xRot, yRot, zRot);
        wheel03.name = "Wheel03";
        car.add(wheel03);
        var wheel04 =  new THREE.Mesh(wheelGeo, wheelCol);
        wheel04.position.set(xPos + (14 * xSize), yPos - (10 * ySize), zPos + (18 * zSize));
        wheel04.rotation.set(xRot, yRot, zRot);
        wheel04.name = "Wheel04";
        car.add(wheel04);
        
        var lampFrontGeo = new THREE.CylinderGeometry(1.5 * xSize, 1.5 * ySize, 4 * zSize, 16, 1, false);
        var lampF01 =  new THREE.Mesh(lampFrontGeo, lampCol);
        lampF01.position.set(xPos + (7 * xSize), yPos + (0 * ySize), zPos + (26 * zSize));
        lampF01.rotation.x = 90 * DEG_TO_RAD;
        lampF01.name = "LampF01";
        car.add(lampF01);
        var lampF02 =  new THREE.Mesh(lampFrontGeo, lampCol);
        lampF02.position.set(xPos - (7 * xSize), yPos + (0 * ySize), zPos + (26 * zSize));
        lampF02.rotation.x = 90 * DEG_TO_RAD;
        lampF02.name = "LampF02";
        car.add(lampF02);

        var lampBackGeo = new THREE.BoxGeometry(4 * xSize, 1.5 * ySize, 1.5 * zSize);
        var lampB01 =  new THREE.Mesh(lampBackGeo, lampCol);
        lampB01.position.set(xPos + (7 * xSize), yPos + (0 * ySize), zPos - (26 * zSize));
        lampB01.rotation.x = 90 * DEG_TO_RAD;
        lampB01.name = "LampB01";
        car.add(lampB01);
        var lampB02 =  new THREE.Mesh(lampBackGeo, lampCol);
        lampB02.position.set(xPos - (7 * xSize), yPos + (0 * ySize), zPos - (26 * zSize));
        lampB02.rotation.x = 90 * DEG_TO_RAD;
        lampB02.name = "LampB02";
        car.add(lampB02);

        var windowShieldGeo = new THREE.BoxGeometry(16 * xSize, 1 * ySize, 10 * zSize);
        var windowShield =  new THREE.Mesh(windowShieldGeo, windowCol);
        windowShield.position.set(xPos,yPos + (5* ySize), zPos + (5.5 * zSize));
        windowShield.rotation.x = 90 * DEG_TO_RAD;
        windowShield.name = "WindowShield";
        car.add(windowShield);

        var cT1 = {
            moving: new TWEEN.Tween(car.position).to({y: yPos + 1, z: zPos + 1500}, 4000)
        }
        corpus01.userData = cT1;

        this.add(car);
        

        
    }


}