window.addEventListener("keyup",function(event){
    if (event.key == "Enter") {
            document.getElementById("cal").click();
    }
    event.preventDefault();
})
//增加一個EventListener，偵測Enter鍵是否被按下，若被按下則代為執行點擊按鈕

function calculate(arr, weight) {
    arr.sort((a, b) => a - b); // 先排序
    let min = arr[0];
    let max = arr[arr.length - 1];
    let midValues = arr.slice(1, arr.length - 1); // 取中間的數字
    let midSum = midValues.reduce((sum, num) => sum + num, 0); // 計算中間數字總和
    let avgMinMax = (min + max) / 2; // 計算最小值與最大值的平均值
    return weight * ((avgMinMax + midSum) / midValues.length);
}

function calculateScore() {
    let rep = document.getElementById('rep').value.split(' ').map(Number);
    let opp = document.getElementById('opp').value.split(' ').map(Number);
    let rev = document.getElementById('rev').value.split(' ').map(Number);

    if (rep.length < 5 || rep.length > 7 || rep.length !== opp.length || rep.length !== rev.length) {
        alert("Please enter exactly 5 to 7 numbers for each category.");
        return;
    }

    let totalScore = calculate(rep, 3) + calculate(opp, 2) + calculate(rev, 1);
    document.getElementById('score').innerText = totalScore.toFixed(3);
}