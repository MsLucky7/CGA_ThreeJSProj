raycaster = new THREE.Raycaster();

function executeRaycast(event) {

    raycaster.setFromCamera(mousePosition, camera);

    var intersects = raycaster.intersectObjects(scene.children, true);

    //soundscape.getSounds()["src/sound/files/meep11.mp3"].pause();
    //var volume = 1;
    soundscape = new Soundscape();

    if (intersects.length > 0) {

        var firstHit = intersects[0].object;

        if(firstHit.name == "Corpus01" || firstHit.name == "Corpus02" || firstHit.name == "Corpus03" || firstHit.name == "Corpus04" || firstHit.name == "Corpus05" || firstHit.name == "Corpus06" || firstHit.name == "Corpus07") {
            firstHit.userData.moving.start();
            //hoverCar.hoverCarSound.sound = true;
            //soundscape.getSounds()["src/sound/files/meep11.mp3"].setVolume(volume);

            soundscape.addSound(firstHit, "src/sound/files/meep11.mp3", 500, true);
            soundscape.getSounds()["src/sound/files/meep11.mp3"].play();
        }

        /*
        if(firstHit.name === "Einschalter" || firstHit.name === "Antenne") {
            firstHit.userData.toggleEndPosition();

        } else if (firstHit.name === "Tuner") {
            firstHit.userData.forward = !firstHit.userData.forward;
            if(firstHit.userData.forward) {
                firstHit.userData.backwardTween.stop();
                firstHit.userData.forwardTween.start();
            } else {
                firstHit.userData.forwardTween.stop();
                firstHit.userData.backwardTween.start();
            }
        }

        if (firstHit.name === "EinschalterFBX") {
            radioState.powerOn = !radioState.powerOn;

            if (radioState.powerOn && !radioAnimationMixer.existingAction("Einschalter_Action_aus").isRunning()) {
                radioAnimationMixer.existingAction("Einschalter_Action_aus").stop();
                radioAnimationMixer.existingAction("Einschalter_Action_ein").play();
            } else if (!radioState.powerOn && !radioAnimationMixer.existingAction("Einschalter_Action_ein").isRunning()) {
                radioAnimationMixer.existingAction("Einschalter_Action_ein").stop();
                radioAnimationMixer.existingAction("Einschalter_Action_aus").play();
            }
        } else if (firstHit.name === "AntenneFBX") {
            radioState.antennaOut = !radioState.antennaOut;
            if (radioState.antennaOut && !radioAnimationMixer.existingAction("Antenne_Action_einfahren").isRunning()) {
                radioAnimationMixer.existingAction("Antenne_Action_einfahren").stop();
                radioAnimationMixer.existingAction("Antenne_Action_ausfahren").play();
            } else if (!radioState.antennaOut && !radioAnimationMixer.existingAction("Antenne_Action_ausfahren").isRunning()) {
                radioAnimationMixer.existingAction("Antenne_Action_ausfahren").stop();
                radioAnimationMixer.existingAction("Antenne_Action_einfahren").play();
            }
        } else if (firstHit.name === "TunerFBX") {
            radioState.markerRight = !radioState.markerRight;
            if (radioState.markerRight && !radioAnimationMixer.existingAction("Marker_Action_zurueck").isRunning()) {
                radioAnimationMixer.existingAction("Marker_Action_zurueck").stop();
                radioAnimationMixer.existingAction("Marker_Action_vor").play();
            } else if (!radioState.markerRight && !radioAnimationMixer.existingAction("Marker_Action_vor").isRunning()) {
                radioAnimationMixer.existingAction("Marker_Action_vor").stop();
                radioAnimationMixer.existingAction("Marker_Action_zurueck").play();
            }
        }
        */
    }
}