/*
* 递归算法
* 递归函数三要素：1、函数功能，目的；2、递归结束条件；3、递归等价关系式，即F(n) = F(n-1) + F(n-2)之类
* create by dean
* date: 2019/6/10
* */

// 1、动态规划
// 题目：有一个只能容纳10本书的单层书架，你每次只能放1本或2本书。要求用程序求出你将书架填满一共有多少种方法。
// 思路：倒推，最后一步放到书架上填满书架的可能情况有：1、书架上已有8本，放2本填满；书架上已有9本，放1本填满
// F(10) = F(9) + F(8)....类推，边界是 F(3) = F(2) + F(1) = 2 + 1

let countHowManyTimesToTakeBook = (num) => {
  let countMap = new Map() // 用于储存已计算的值，减少函数执行次数
  let times = 0
  let count = (n) => {
    times++
    if (n < 1) return 0
    if (n < 4) {
      return n
    }

    let n1 = countMap.get(n - 1) || count(n - 1)
    countMap.set(n - 1, n1)

    let n2 = countMap.get(n - 2) || count(n - 2)
    countMap.set(n - 2, n2)
    return n1 + n2
  }
  return { value: count(num), times }
}

let countResult = countHowManyTimesToTakeBook(4)
console.log(countResult.value, `函数执行次数 ${countResult.times}`)

// F(6) = F(5) + F(4)
// F(5) = F(4) + F(3)
// F(4) = F(3) + F(2)
// F(4) = F(3) + F(2)
