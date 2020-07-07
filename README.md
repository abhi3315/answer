## Question Submission

#### Requirement

> Node.js must be installed

#### Command to run

 `node answer.js <INPUT>`

## Test Cases

#### Test Case-1

* Input:  

` node answer.js "2000-01-01:100 2019-01-04:115" `

* Output:  

``` 
Input: { '2019-01-01': 100, '2019-01-04': 115 } 
Output: {
  '2019-01-01': 100, 
  '2019-01-02': 105, 
  '2019-01-03': 110, 
  '2019-01-04': 115
} 
```

#### Test Case-2

* Input:  

` node answer.js "2000-01-01:100 2000-02-04:400" `

* Output:  

``` 
Input:  { '2000-01-01': 100, '2000-02-04': 400 }
Output:  {
  '2000-01-01': 100,
  '2000-01-02': 108.82352941176471,
  '2000-01-03': 117.64705882352942,
  '2000-01-04': 126.47058823529412,
  '2000-01-05': 135.29411764705884,
  '2000-01-06': 144.11764705882354,
  '2000-01-07': 152.94117647058823,
  '2000-01-08': 161.76470588235293,
  '2000-01-09': 170.58823529411765,
  '2000-01-10': 179.41176470588238,
  '2000-01-11': 188.23529411764707,
  '2000-01-12': 197.05882352941177,
  '2000-01-13': 205.88235294117646,
  '2000-01-14': 214.7058823529412,
  '2000-01-15': 223.52941176470588,
  '2000-01-16': 232.3529411764706,
  '2000-01-17': 241.1764705882353,
  '2000-01-18': 250,
  '2000-01-19': 258.82352941176475,
  '2000-01-20': 267.6470588235294,
  '2000-01-21': 276.47058823529414,
  '2000-01-22': 285.29411764705884,
  '2000-01-23': 294.11764705882354,
  '2000-01-24': 302.9411764705883,
  '2000-01-25': 311.7647058823529,
  '2000-01-26': 320.5882352941177,
  '2000-01-27': 329.4117647058824,
  '2000-01-28': 338.2352941176471,
  '2000-01-29': 347.05882352941177,
  '2000-01-30': 355.88235294117646,
  '2000-01-31': 364.7058823529412,
  '2000-02-01': 373.5294117647059,
  '2000-02-02': 382.3529411764706,
  '2000-02-03': 391.1764705882353,
  '2000-02-04': 400
} 
```