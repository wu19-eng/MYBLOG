---
title: 概率论知识点汇总（张宇基础30讲）
date: 2026-10-22
tags: ["数学", "概率"]
---

> 适配张宇基础 30 讲，只收录刷题、讨论过的内容。

## 第1讲 随机事件与概率

### 事件运算公式

1. 差事件：$A-B=A\overline{B}$
2. 对偶律（德摩根公式）：

$$
\overline{A\cup B}=\overline{A}\cap\overline{B};\quad \overline{A\cap B}=\overline{A}\cup\overline{B}
$$

口诀：先逆，后交再并差

### 概率公理与基本公式

1. 概率取值范围：$0\le P(A)\le 1$，样本空间 $P(\Omega)=1$
2. 加法公式：$P(A\cup B)=P(A)+P(B)-P(AB)$
3. 差事件概率：$P(A-B)=P(A\overline{B})=P(A)-P(AB)$
4. 条件概率：$P(B|A)=\dfrac{P(AB)}{P(A)}$
5. 乘法公式：$P(AB)=P(A)P(B|A)$

链式乘法推广：

$$
P(A_1A_2\cdots A_n)=P(A_1)P(A_2|A_1)P(A_3|A_1A_2)\cdots P(A_n|A_1A_2\cdots A_{n-1})
$$

### 两大概型

- 古典概型：每个基本事件等概率；常考分配、占位问题
- 几何概型：利用几何度量计算概率

$$
P(A)=\frac{S(A)}{S(\Omega)}=\frac{d(A)}{d(\Omega)}
$$

### 事件相互关系

1. 相互促进：$P(AB)>P(A)P(B)$
2. 相互抑制：$P(AB)<P(A)P(B)$
3. 相互独立判定：$P(AB)=P(A)P(B)$
4. 多事件独立：$A,B,C$ 相互独立 $\iff$ 两两独立 且 $P(ABC)=P(A)P(B)P(C)$
5. 特殊结论：若 $P(A)=0$ 或 $P(A)=1$，则 $A$ 与任意事件 $B$ 独立；独立事件取逆之后任意组合依旧独立

## 第2讲 随机变量及其分布

### 分布函数定义

$$
F(x)=P\{X\le x\},\quad x\in\mathbb{R}
$$

### 分布函数四大性质

1. $F(-\infty)=0,\ F(+\infty)=1$
2. 单调不减：$x_1<x_2 \Rightarrow F(x_1)\le F(x_2)$
3. 右连续：$F(x)=F(x+0)$
4. 取值有界：$0\le F(x)\le 1$

### 离散型随机变量

分布函数为阶梯函数：

$$
F(x)=\sum_{x_i\le x}P\{X=x_i\}
$$

### 连续型随机变量

存在非负可积的概率密度 $f(x)$：

$$
F(x)=\int_{-\infty}^{x}f(t)\,dt
$$

归一化条件：

$$
\int_{-\infty}^{+\infty}f(t)\,dt=1
$$

### 0-1 分布

记作 $B(1,p)$：

$$
P\{X=1\}=p,\quad P\{X=0\}=1-p
$$

> 注：当 $n\ll N$ 时，超几何分布可以近似二项分布。

### 均匀分布

记作 $U(a,b)$。概率密度：

$$
f(x)=\begin{cases}
\dfrac{1}{b-a}, & a<x<b \\[6pt]
0, & \text{其他}
\end{cases}
$$

分布函数：

$$
F(x)=\begin{cases}
0, & x<a \\[6pt]
\dfrac{x-a}{b-a}, & a\le x<b \\[6pt]
1, & x\ge b
\end{cases}
$$

### 指数分布

记作 $E(\lambda)$。分布函数：

$$
F(t)=1-e^{-\lambda t},\quad t>0
$$

生存（残存）函数：

$$
S(t)=P(T>t)=1-F(t)=e^{-\lambda t}
$$

👉 无记忆性：

$$
P(T>s+t\mid T>s)=P(T>t)
$$

理解：$T$ 为事件发生等待时间；$T<t$ 代表 $t$ 时刻之前事件未发生；$\lambda$ 为事件发生强度；指数分布对应泊松分布的间隔时间。

### 正态分布

记作 $N(\mu,\sigma^2)$。概率密度：

$$
f(x)=\frac{1}{\sqrt{2\pi}\,\sigma}e^{-\frac{(x-\mu)^2}{2\sigma^2}},\quad -\infty<x<+\infty
$$

性质：

- 图像关于 $x=\mu$ 对称：$f(\mu-x)=f(\mu+x)$
- $x=\mu$ 处取最大值：$f_{\max}=\dfrac{1}{\sqrt{2\pi}\,\sigma}$

标准正态分布 $N(0,1)$：

- $\varphi(x)$：标准正态概率密度

$$
\varphi(x)=\frac{1}{\sqrt{2\pi}}e^{-\frac{x^2}{2}}
$$

- $\Phi(x)$：标准正态分布函数

$$
\Phi(x)=\int_{-\infty}^{x}\frac{1}{\sqrt{2\pi}}e^{-\frac{t^2}{2}}\,dt
$$
