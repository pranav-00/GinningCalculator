function data1() {
    let fb = document.getElementsByClassName("fb");
    fb[1].classList.remove("cur");
    fb[0].classList.add("cur")
    document.getElementById("1").classList.remove("hide")
    document.getElementById("2").classList.add("hide")
} function data2() {
    let fb = document.getElementsByClassName("fb");
    fb[0].classList.remove("cur");
    fb[1].classList.add("cur")
    document.getElementById("2").classList.remove("hide")
    document.getElementById("1").classList.add("hide")
}

//ginning
function ginning1() {
    let kapas = parseFloat(document.getElementById('kapas1').value)
    let expenses = document.getElementById('expenses1').value.length == 0 ? 0 : parseFloat(document.getElementById('expenses1').value)
    let cottonseed = parseFloat(document.getElementById('cottonseed1').value)
    let outturn = parseFloat(document.getElementById('outturn1').value)
    let shortage = document.getElementById('shortage1').value.length == 0 ? 0 : parseFloat(document.getElementById('shortage1').value)
    let ans = (((kapas + expenses) - (cottonseed * (100 - outturn - shortage) / 100)) / (outturn / 100)) / 0.2812
    if (ans < 1000) {
        ans = ans.toFixed(3)
    } else {
        ans = Math.round(ans)
    }
    let ans2 = "<b>" + ans + "</b>"
    if (0) {
        document.getElementById('cost1').innerHTML = "<b>Invalid</b>"
    } else {
        document.getElementById('cost1').innerHTML = ans2
    }
}
function ginning2() {
    let cost = parseFloat(document.getElementById('cost2').value)
    let expenses = parseFloat(document.getElementById('expenses2').value)
    let cottonseed = parseFloat(document.getElementById('cottonseed2').value)
    let outturn = parseFloat(document.getElementById('outturn2').value)
    let shortage = parseFloat(document.getElementById('shortage2').value)
    let ans = (cost * 0.2812 * outturn / 100) - expenses + (cottonseed * (100 - outturn - shortage) / 100)
    if (ans < 1000) {
        ans = ans.toFixed(3)
    } else {
        ans = Math.round((cost * 0.2812 * outturn / 100) - expenses + (cottonseed * (100 - outturn - shortage) / 100))
    }
    let ans2 = "<b>" + ans + "</b>"
    if (0) {
        document.getElementById('kapas2').innerHTML = "<b>Invalid</b>"
    } else {
        document.getElementById('kapas2').innerHTML = ans2
    }
}


//oil
function oil1() {
    if (document.getElementById('pure1').checked) {
        let z = document.getElementsByClassName('1')
        z[0].classList.remove('hide')
        z[1].classList.remove('hide')
        z[2].classList.remove('hide')
        document.getElementsByClassName('11')[0].classList.add('hide')
        document.getElementById('oilunit1').innerText = "Kgs."
    } else {
        let z = document.getElementsByClassName('1')
        z[0].classList.add('hide')
        z[1].classList.add('hide')
        z[2].classList.add('hide')
        document.getElementsByClassName('11')[0].classList.remove('hide')
        document.getElementById('oilunit1').innerText = "%"
    }
    oil4();
}
function oil2() {
    if (document.getElementById('pure2').checked) {
        let z = document.getElementsByClassName('2')
        z[0].classList.remove('hide')
        z[1].classList.remove('hide')
        z[2].classList.remove('hide')
        document.getElementById('oilunit2').innerText = "Kgs."
        document.getElementsByClassName('22')[0].classList.add('hide')
    } else {
        let z = document.getElementsByClassName('2')
        z[0].classList.add('hide')
        z[1].classList.add('hide')
        z[2].classList.add('hide')
        document.getElementById('oilunit2').innerText = "%"
        document.getElementsByClassName('22')[0].classList.remove('hide')
    }
    oil5()
}
function oil4() {
    let cottonseed = parseFloat(document.getElementById('cottonseed1').value)
    let hullrate = parseFloat(document.getElementById('hullrate1').value)
    let hullqty = parseFloat(document.getElementById('hullqty1').value)
    let expenses = parseFloat(document.getElementById('expenses1').value)
    let oilrate = parseFloat(document.getElementById('oilrate1').value)
    let oil = parseFloat(document.getElementById('oil1').value)
    let oilcake = parseFloat(document.getElementById('oilcake1').value)
    let shortage = parseFloat(document.getElementById('shortage1').value)
    let pakingsize = parseFloat(document.getElementById('pakingsize1').value)
    let ans
    if (document.getElementById('pure1').checked) {
        ans = (cottonseed + hullrate * hullqty / 100 + expenses * (1 + hullqty / 100) - oilrate * oil / 10) / ((100 + hullqty - oil - shortage) / pakingsize)
    } else {
        ans = (cottonseed + expenses - oilrate * oil / 10) / (oilcake / pakingsize);
    }
    if (ans < 100000) {
        ans = ans.toFixed(3)
    } else {
        ans = Math.round(ans)
    }
    let ans2 = "<b>" + ans + "</b>"
    if (0) {
        document.getElementById('cost1').innerHTML = "<b>Invalid</b>"
    } else {
        document.getElementById('cost1').innerHTML = ans2
    }
}
function oil5() {
    let cost = parseFloat(document.getElementById('cost2').value)
    let hullrate = parseFloat(document.getElementById('hullrate2').value)
    let hullqty = parseFloat(document.getElementById('hullqty2').value)
    let expenses = parseFloat(document.getElementById('expenses2').value)
    let oilrate = parseFloat(document.getElementById('oilrate2').value)
    let oil = parseFloat(document.getElementById('oil2').value)
    let oilcake = parseFloat(document.getElementById('oilcake2').value)
    let shortage = parseFloat(document.getElementById('shortage2').value)
    let pakingsize = parseFloat(document.getElementById('pakingsize2').value)
    let ans
    if (document.getElementById('pure2').checked) {
        ans = (cost * (100 + hullqty - oil - shortage) / pakingsize) - hullrate * hullqty / 100 - expenses * (1 + hullqty / 100) + oilrate * oil / 10
    } else {
        ans = cost * oilcake / pakingsize - expenses + oilrate * oil / 10;
    }
    if (ans < 100000) {
        ans = ans.toFixed(3)
    } else {
        ans = Math.round(ans)
    }
    let ans2 = "<b>" + ans + "</b>"
    if (0) {
        document.getElementById('cottonseed2').innerHTML = "<b>Invalid</b>"
    } else {
        document.getElementById('cottonseed2').innerHTML = ans2
    }
}

//Export
function export1() {
    if (document.getElementById('cent').checked) {
        document.getElementById('lable').innerHTML = "USD/Kg"
        document.getElementById('lable2').innerHTML = "USD/Kg"
    } else {
        document.getElementById('lable').innerHTML = "Cents/LB"
        document.getElementById('lable2').innerHTML = "Cents/LB"
    }
}
function export3() {
    let cottonrate = parseFloat(document.getElementById('cottonrate1').value)
    let expenses = parseFloat(document.getElementById('expenses1').value)
    let exchangerate = parseFloat(document.getElementById('exchangerate1').value)
    let ans = (cottonrate + expenses) * 0.2812 / (exchangerate * 2.20462)
    let ans3 = (cottonrate + expenses) * 0.002812 / exchangerate
    if (ans < 10000) {
        ans = ans.toFixed(4)
    } else {
        ans = Math.round(ans)
    } if (ans3 < 10000) {
        ans3 = ans3.toFixed(4)
    } else {
        ans3 = Math.round(ans3)
    }
    let ans2 = "<b>" + ans + "</b>"
    let ans4 = "<b>" + ans3 + "</b>"
    if (0) {
        document.getElementById('cents').innerHTML = "<b>Invalid</b>"
        document.getElementById('usd').innerHTML = "<b>Invalid</b>"
    } else {
        document.getElementById('cents').innerHTML = ans2
        document.getElementById('usd').innerHTML = ans4
    }
}
function export4() {
    let exportrate = parseFloat(document.getElementById('exportrate2').value)
    let expenses = parseFloat(document.getElementById('expenses2').value)
    let exchangerate = parseFloat(document.getElementById('exchangerate2').value)
    let ans
    if (document.getElementById('cent').checked) {
        ans = exportrate * exchangerate / 0.002812 - expenses
    } else {
        ans = exportrate * exchangerate * 2.20462 / 0.2812 - expenses
    }
    if (ans < 1000) {
        ans = ans.toFixed(4)
    } else {
        ans = Math.round(ans)
    }
    let ans2 = "<b>" + ans + "</b>"
    if (0) {
        document.getElementById('realisation').innerHTML = "<b>Invalid</b>"
    } else {
        document.getElementById('realisation').innerHTML = ans2
    }
}

//conv
let popt2 = 1, popt1 = false
function conv1() {
    let lable1 = document.getElementById('lable11'),
        lable2 = document.getElementById('lable21'),
        lable3 = document.getElementById('lable31'),
        input1 = document.getElementById('lable12'),
        input2 = document.getElementById('lable22'),
        input3 = document.getElementById('lable32'),
        lable = document.getElementById('lable'),
        opt1 = document.getElementById('cent').checked,
        arr = Array.from(document.getElementsByName('11'))
    let opt2
    arr.forEach((e) => {
        if (e.checked) {
            opt2 = e.value
        }
    })
    if (popt2 != opt2) {
        popt2 = opt2
        document.getElementById('cent').checked = false
        input1.value = ""
        input2.value = ""
        input3.value = ""
    } if (popt1 != opt1) {
        popt1 = opt1
        input1.value = ""
        input3.value = ""
    }
    if (opt2 == 1 && !opt1) {
        lable1.innerText = "US Cents/LB"
        lable2.innerText = "Exchange Rate (USD/INR)"
        lable3.innerText = "INR/Candy"
        lable.innerText = "Cents/LB To Indian Rate"
        input1.disabled = false
        input2.disabled = false
        input3.disabled = true
        if (input1.value.length > 0 && input2.value.length > 0) {
            let ans1 = (parseFloat(input1.value) / 0.453592 * 100 / 0.2812 * parseFloat(input2.value) / 100).toFixed(0)
            input3.value = ans1
        }
    }
    else if (opt2 == 1 && opt1) {
        lable1.innerText = "INR/Candy"
        lable2.innerText = "Exchange Rate (USD/INR)"
        lable3.innerText = "US Cents/LB"
        lable.innerText = "Indian Rate To Cents/LB"
        input1.disabled = false
        input2.disabled = false
        input3.disabled = true
        if (input1.value.length > 0 && input2.value.length > 0) {
            let ans1 = (parseFloat(input1.value) * 0.453592 / 100 * 0.2812 / parseFloat(input2.value) * 100).toFixed(2)
            input3.value = ans1
        }
    }
    else if (opt2 == 2 && !opt1) {
        lable1.innerText = "CNY/LB"
        lable2.innerText = "Exchange Rate (CNY/INR)"
        lable3.innerText = "INR/Candy"
        lable.innerText = "Chinese Rate To Indian Rate"
        input1.disabled = false
        input2.disabled = false
        input3.disabled = true
        input3.value = input1.value / 1 + input2.value / 1
        if (input1.value.length > 0 && input2.value.length > 0) {
            let ans1 = (parseFloat(input1.value) / 1000 * 100 / 0.2812 * parseFloat(input2.value)).toFixed(0)
            input3.value = ans1
        }
    }
    else if (opt2 == 2 && opt1) {
        lable1.innerText = "INR/Candy"
        lable2.innerText = "Exchange Rate (CNY/INR)"
        lable3.innerText = "CNY/LB"
        lable.innerText = "Indian Rate To Chinese Rate"
        input1.disabled = false
        input2.disabled = false
        input3.disabled = true
        if (input1.value.length > 0 && input2.value.length > 0) {
            let ans1 = (parseFloat(input1.value) * 1000 / 100 * 0.2812 / parseFloat(input2.value)).toFixed(0)
            input3.value = ans1
        }
    }
    else if (opt2 == 3 && !opt1) {
        lable1.innerText = "PKR/Maund"
        lable2.innerText = "Exchange Rate (INR/PKR)"
        lable3.innerText = "INR/Candy"
        lable.innerText = "Pakistan Rate To Indian Rate"
        input1.disabled = false
        input2.disabled = false
        input3.disabled = true
        if (input1.value.length > 0 && input2.value.length > 0) {
            let ans1 = (parseFloat(input1.value) / 37.3242 * 100 / 0.2812 / parseFloat(input2.value)).toFixed(0)
            input3.value = ans1
        }
    } else if (opt2 == 3 && opt1) {
        lable1.innerText = "INR/Candy"
        lable2.innerText = "Exchange Rate (INR/PKR)"
        lable3.innerText = "PKR/Maund"
        lable.innerText = "Indian Rate To Pakistan Rate"
        input1.disabled = false
        input2.disabled = false
        input3.disabled = true
        if (input1.value.length > 0 && input2.value.length > 0) {
            let ans1 = (parseFloat(input1.value) * 37.3242 / 100 * 0.2812 * parseFloat(input2.value)).toFixed(0)
            input3.value = ans1
        }
    }
    else if (opt2 == 4 && !opt1) {
        lable1.innerText = "INR/Maund"
        lable2.innerText = "INR/170 Kgs"
        lable3.innerText = "INR/Candy"
        lable.innerText = "Punjab Rate To Candy Rate"
        input1.disabled = false
        input2.disabled = true
        input3.disabled = true
        if (input1.value.length > 0) {
            let ans1 = (parseFloat(input1.value) / 37.3242 * 170).toFixed(0),
                ans2 = (parseFloat(input1.value) / 37.3242 * 100 / 0.2812).toFixed(0)
            input2.value = ans1
            input3.value = ans2
        }
    } else if (opt2 == 4 && opt1) {
        lable1.innerText = "INR/Candy"
        lable2.innerText = "INR/170 Kgs"
        lable3.innerText = "INR/Maund"
        lable.innerText = "Candy Rate To Punjab Rate"
        input1.disabled = false
        input2.disabled = true
        input3.disabled = true
        if (input1.value.length > 0) {
            let ans1 = (parseFloat(input1.value) / 100 * 0.2812 * 170).toFixed(0),
                ans2 = (parseFloat(input1.value) * 37.3242 / 100 * 0.2812).toFixed(2)
            input2.value = ans1
            input3.value = ans2
        }
    }
    else if (opt2 == 5 && !opt1) {
        lable1.innerText = "INR/170 Kgs"
        lable2.innerText = "INR/Maund"
        lable3.innerText = "INR/Candy"
        lable.innerText = "170 Kgs Rate To Candy Rate"
        input1.disabled = false
        input2.disabled = true
        input3.disabled = true
        if (input1.value.length > 0) {
            let ans1 = (parseFloat(input1.value) / 170 * 37.3242).toFixed(2),
                ans2 = (parseFloat(input1.value) / 170 * 100 / 0.2812).toFixed(0)
            input2.value = ans1
            input3.value = ans2
        }
    } else if (opt2 == 5 && opt1) {
        lable1.innerText = "INR/Candy"
        lable2.innerText = "INR/Maund"
        lable3.innerText = "INR/170 Kgs"
        lable.innerText = "Candy Rate To 170 Kgs Rate"
        input1.disabled = false
        input2.disabled = true
        input3.disabled = true
        if (input1.value.length > 0) {
            let ans1 = (parseFloat(input1.value) / 100 * 0.2812 * 37.3242).toFixed(2),
                ans2 = (parseFloat(input1.value) * 170 / 100 * 0.2812).toFixed(0)
            input2.value = ans1
            input3.value = ans2
        }
    }
}