new TypeIt("#typed", {
    speed: 50,
    lifeLike: true,
    cursor: true,
    cursorChar: "<span class='block-cursor'></span>",
    waitUntilVisible: true
})
.type("<span class='user'>jason@portfolio</span>:<span class='asterisk'>~</span>$ cd /profile/jason-hashimoto<br>",{ delay: 500 })
.type("<span class='user'>jason@portfolio</span>:<span class='asterisk'>/profile/jason-hashimoto</span>$ ls<br>",{ delay: 500 })
.type("job: sports science I, driveline baseball<br>")
.type("interests: sports, cooking, climbing<br>")
.type("eduction: b.s. kinesiology, oregon state univeristy, m.s. biomechanics, point loma nazarene university<br>")
.type("upcoming-events: isbs 2023<br>")
.type("<span class='user'>jason@portfolio</span>:<span class='asterisk'>/profile/jason-hashimoto</span>$ ")
.go();

