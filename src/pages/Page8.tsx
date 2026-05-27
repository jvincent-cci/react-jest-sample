import { useState } from 'react';
    import { Component0499 } from '../components/generated/Component0499';
import { Component0434 } from '../components/generated/Component0434';
import { Component0356 } from '../components/generated/Component0356';
import { Component0790 } from '../components/generated/Component0790';
import { Component0635 } from '../components/generated/Component0635';
import { Component0717 } from '../components/generated/Component0717';
import { Component0656 } from '../components/generated/Component0656';
import { Component0985 } from '../components/generated/Component0985';
import { Component0245 } from '../components/generated/Component0245';
import { Component0789 } from '../components/generated/Component0789';
import { Component0768 } from '../components/generated/Component0768';
import { Component0110 } from '../components/generated/Component0110';
import { Component0471 } from '../components/generated/Component0471';
import { Component0968 } from '../components/generated/Component0968';
import { Component0875 } from '../components/generated/Component0875';
import { Component0408 } from '../components/generated/Component0408';
import { Component0561 } from '../components/generated/Component0561';
import { Component0125 } from '../components/generated/Component0125';
import { Component0181 } from '../components/generated/Component0181';
import { Component0029 } from '../components/generated/Component0029';
import { Component0853 } from '../components/generated/Component0853';
import { Component0236 } from '../components/generated/Component0236';
import { Component0420 } from '../components/generated/Component0420';
import { Component0142 } from '../components/generated/Component0142';
import { Component0327 } from '../components/generated/Component0327';
import { Component0810 } from '../components/generated/Component0810';
import { Component0259 } from '../components/generated/Component0259';
import { Component0088 } from '../components/generated/Component0088';
import { Component0184 } from '../components/generated/Component0184';
import { Component0083 } from '../components/generated/Component0083';
import { Component0156 } from '../components/generated/Component0156';
import { Component0086 } from '../components/generated/Component0086';
import { Component0145 } from '../components/generated/Component0145';
import { Component0118 } from '../components/generated/Component0118';
import { Component0527 } from '../components/generated/Component0527';
import { Component0266 } from '../components/generated/Component0266';
import { Component0421 } from '../components/generated/Component0421';
import { Component0205 } from '../components/generated/Component0205';
import { Component0269 } from '../components/generated/Component0269';
import { Component0033 } from '../components/generated/Component0033';
import { Component0575 } from '../components/generated/Component0575';
import { Component0198 } from '../components/generated/Component0198';
import { Component0996 } from '../components/generated/Component0996';
import { Component0704 } from '../components/generated/Component0704';
import { Component0683 } from '../components/generated/Component0683';
import { Component0543 } from '../components/generated/Component0543';
import { Component0247 } from '../components/generated/Component0247';
import { Component0670 } from '../components/generated/Component0670';
import { Component0587 } from '../components/generated/Component0587';
import { Component0955 } from '../components/generated/Component0955';
import { Component0308 } from '../components/generated/Component0308';
import { Component0295 } from '../components/generated/Component0295';
import { Component0444 } from '../components/generated/Component0444';
import { Component0610 } from '../components/generated/Component0610';
import { Component0833 } from '../components/generated/Component0833';
import { Component0915 } from '../components/generated/Component0915';
import { Component0383 } from '../components/generated/Component0383';
import { Component0872 } from '../components/generated/Component0872';
import { Component0898 } from '../components/generated/Component0898';
import { Component0026 } from '../components/generated/Component0026';
import { Component0323 } from '../components/generated/Component0323';
import { Component0983 } from '../components/generated/Component0983';
import { Component0843 } from '../components/generated/Component0843';
import { Component0678 } from '../components/generated/Component0678';
import { Component0633 } from '../components/generated/Component0633';
import { Component0106 } from '../components/generated/Component0106';
import { Component0864 } from '../components/generated/Component0864';
import { Component0638 } from '../components/generated/Component0638';
import { Component0178 } from '../components/generated/Component0178';
import { Component0502 } from '../components/generated/Component0502';
import { Component0852 } from '../components/generated/Component0852';
import { Component0397 } from '../components/generated/Component0397';
import { Component0416 } from '../components/generated/Component0416';
import { Component0582 } from '../components/generated/Component0582';
import { Component0453 } from '../components/generated/Component0453';
import { Component0668 } from '../components/generated/Component0668';
import { Component0172 } from '../components/generated/Component0172';
import { Component0049 } from '../components/generated/Component0049';
import { Component0490 } from '../components/generated/Component0490';
import { Component0023 } from '../components/generated/Component0023';
import { Component0806 } from '../components/generated/Component0806';
import { Component0958 } from '../components/generated/Component0958';
import { Component0484 } from '../components/generated/Component0484';
import { Component0675 } from '../components/generated/Component0675';
import { Component0012 } from '../components/generated/Component0012';
import { Component0368 } from '../components/generated/Component0368';
import { Component0340 } from '../components/generated/Component0340';
import { Component0690 } from '../components/generated/Component0690';
import { Component0363 } from '../components/generated/Component0363';
import { Component0123 } from '../components/generated/Component0123';
import { Component0700 } from '../components/generated/Component0700';
import { Component0926 } from '../components/generated/Component0926';
import { Component0849 } from '../components/generated/Component0849';
import { Component0696 } from '../components/generated/Component0696';
import { Component0977 } from '../components/generated/Component0977';
import { Component0648 } from '../components/generated/Component0648';
import { Component0228 } from '../components/generated/Component0228';
import { Component0720 } from '../components/generated/Component0720';
import { Component0779 } from '../components/generated/Component0779';
import { Component0398 } from '../components/generated/Component0398';

    const initialValues = Array.from({ length: 100 }, (_, index) => `page-8-value-${index + 1}`);

    export function Page8() {
      const [values, setValues] = useState(initialValues);

      const updateValue = (index: number, value: string) => {
        setValues((currentValues) =>
          currentValues.map((currentValue, currentIndex) => (currentIndex === index ? value : currentValue)),
        );
      };

      return (
        <section aria-labelledby="page-8-title">
          <h2 id="page-8-title">Page 8</h2>
          <div className="input-grid">
            
        <label className="input-card" key="Page 8 field 1">
          <span>Page 8 field 1</span>
          <input
            aria-label="Page 8 field 1 input"
            value={values[0]}
            onChange={(event) => updateValue(0, event.target.value)}
          />
          <Component0499
            label="Page 8 field 1"
            value={values[0]}
            onApply={(nextValue) => updateValue(0, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 2">
          <span>Page 8 field 2</span>
          <input
            aria-label="Page 8 field 2 input"
            value={values[1]}
            onChange={(event) => updateValue(1, event.target.value)}
          />
          <Component0434
            label="Page 8 field 2"
            value={values[1]}
            onApply={(nextValue) => updateValue(1, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 3">
          <span>Page 8 field 3</span>
          <input
            aria-label="Page 8 field 3 input"
            value={values[2]}
            onChange={(event) => updateValue(2, event.target.value)}
          />
          <Component0356
            label="Page 8 field 3"
            value={values[2]}
            onApply={(nextValue) => updateValue(2, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 4">
          <span>Page 8 field 4</span>
          <input
            aria-label="Page 8 field 4 input"
            value={values[3]}
            onChange={(event) => updateValue(3, event.target.value)}
          />
          <Component0790
            label="Page 8 field 4"
            value={values[3]}
            onApply={(nextValue) => updateValue(3, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 5">
          <span>Page 8 field 5</span>
          <input
            aria-label="Page 8 field 5 input"
            value={values[4]}
            onChange={(event) => updateValue(4, event.target.value)}
          />
          <Component0635
            label="Page 8 field 5"
            value={values[4]}
            onApply={(nextValue) => updateValue(4, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 6">
          <span>Page 8 field 6</span>
          <input
            aria-label="Page 8 field 6 input"
            value={values[5]}
            onChange={(event) => updateValue(5, event.target.value)}
          />
          <Component0717
            label="Page 8 field 6"
            value={values[5]}
            onApply={(nextValue) => updateValue(5, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 7">
          <span>Page 8 field 7</span>
          <input
            aria-label="Page 8 field 7 input"
            value={values[6]}
            onChange={(event) => updateValue(6, event.target.value)}
          />
          <Component0656
            label="Page 8 field 7"
            value={values[6]}
            onApply={(nextValue) => updateValue(6, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 8">
          <span>Page 8 field 8</span>
          <input
            aria-label="Page 8 field 8 input"
            value={values[7]}
            onChange={(event) => updateValue(7, event.target.value)}
          />
          <Component0985
            label="Page 8 field 8"
            value={values[7]}
            onApply={(nextValue) => updateValue(7, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 9">
          <span>Page 8 field 9</span>
          <input
            aria-label="Page 8 field 9 input"
            value={values[8]}
            onChange={(event) => updateValue(8, event.target.value)}
          />
          <Component0245
            label="Page 8 field 9"
            value={values[8]}
            onApply={(nextValue) => updateValue(8, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 10">
          <span>Page 8 field 10</span>
          <input
            aria-label="Page 8 field 10 input"
            value={values[9]}
            onChange={(event) => updateValue(9, event.target.value)}
          />
          <Component0789
            label="Page 8 field 10"
            value={values[9]}
            onApply={(nextValue) => updateValue(9, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 11">
          <span>Page 8 field 11</span>
          <input
            aria-label="Page 8 field 11 input"
            value={values[10]}
            onChange={(event) => updateValue(10, event.target.value)}
          />
          <Component0768
            label="Page 8 field 11"
            value={values[10]}
            onApply={(nextValue) => updateValue(10, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 12">
          <span>Page 8 field 12</span>
          <input
            aria-label="Page 8 field 12 input"
            value={values[11]}
            onChange={(event) => updateValue(11, event.target.value)}
          />
          <Component0110
            label="Page 8 field 12"
            value={values[11]}
            onApply={(nextValue) => updateValue(11, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 13">
          <span>Page 8 field 13</span>
          <input
            aria-label="Page 8 field 13 input"
            value={values[12]}
            onChange={(event) => updateValue(12, event.target.value)}
          />
          <Component0471
            label="Page 8 field 13"
            value={values[12]}
            onApply={(nextValue) => updateValue(12, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 14">
          <span>Page 8 field 14</span>
          <input
            aria-label="Page 8 field 14 input"
            value={values[13]}
            onChange={(event) => updateValue(13, event.target.value)}
          />
          <Component0968
            label="Page 8 field 14"
            value={values[13]}
            onApply={(nextValue) => updateValue(13, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 15">
          <span>Page 8 field 15</span>
          <input
            aria-label="Page 8 field 15 input"
            value={values[14]}
            onChange={(event) => updateValue(14, event.target.value)}
          />
          <Component0875
            label="Page 8 field 15"
            value={values[14]}
            onApply={(nextValue) => updateValue(14, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 16">
          <span>Page 8 field 16</span>
          <input
            aria-label="Page 8 field 16 input"
            value={values[15]}
            onChange={(event) => updateValue(15, event.target.value)}
          />
          <Component0408
            label="Page 8 field 16"
            value={values[15]}
            onApply={(nextValue) => updateValue(15, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 17">
          <span>Page 8 field 17</span>
          <input
            aria-label="Page 8 field 17 input"
            value={values[16]}
            onChange={(event) => updateValue(16, event.target.value)}
          />
          <Component0561
            label="Page 8 field 17"
            value={values[16]}
            onApply={(nextValue) => updateValue(16, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 18">
          <span>Page 8 field 18</span>
          <input
            aria-label="Page 8 field 18 input"
            value={values[17]}
            onChange={(event) => updateValue(17, event.target.value)}
          />
          <Component0125
            label="Page 8 field 18"
            value={values[17]}
            onApply={(nextValue) => updateValue(17, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 19">
          <span>Page 8 field 19</span>
          <input
            aria-label="Page 8 field 19 input"
            value={values[18]}
            onChange={(event) => updateValue(18, event.target.value)}
          />
          <Component0181
            label="Page 8 field 19"
            value={values[18]}
            onApply={(nextValue) => updateValue(18, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 20">
          <span>Page 8 field 20</span>
          <input
            aria-label="Page 8 field 20 input"
            value={values[19]}
            onChange={(event) => updateValue(19, event.target.value)}
          />
          <Component0029
            label="Page 8 field 20"
            value={values[19]}
            onApply={(nextValue) => updateValue(19, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 21">
          <span>Page 8 field 21</span>
          <input
            aria-label="Page 8 field 21 input"
            value={values[20]}
            onChange={(event) => updateValue(20, event.target.value)}
          />
          <Component0853
            label="Page 8 field 21"
            value={values[20]}
            onApply={(nextValue) => updateValue(20, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 22">
          <span>Page 8 field 22</span>
          <input
            aria-label="Page 8 field 22 input"
            value={values[21]}
            onChange={(event) => updateValue(21, event.target.value)}
          />
          <Component0236
            label="Page 8 field 22"
            value={values[21]}
            onApply={(nextValue) => updateValue(21, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 23">
          <span>Page 8 field 23</span>
          <input
            aria-label="Page 8 field 23 input"
            value={values[22]}
            onChange={(event) => updateValue(22, event.target.value)}
          />
          <Component0420
            label="Page 8 field 23"
            value={values[22]}
            onApply={(nextValue) => updateValue(22, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 24">
          <span>Page 8 field 24</span>
          <input
            aria-label="Page 8 field 24 input"
            value={values[23]}
            onChange={(event) => updateValue(23, event.target.value)}
          />
          <Component0142
            label="Page 8 field 24"
            value={values[23]}
            onApply={(nextValue) => updateValue(23, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 25">
          <span>Page 8 field 25</span>
          <input
            aria-label="Page 8 field 25 input"
            value={values[24]}
            onChange={(event) => updateValue(24, event.target.value)}
          />
          <Component0327
            label="Page 8 field 25"
            value={values[24]}
            onApply={(nextValue) => updateValue(24, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 26">
          <span>Page 8 field 26</span>
          <input
            aria-label="Page 8 field 26 input"
            value={values[25]}
            onChange={(event) => updateValue(25, event.target.value)}
          />
          <Component0810
            label="Page 8 field 26"
            value={values[25]}
            onApply={(nextValue) => updateValue(25, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 27">
          <span>Page 8 field 27</span>
          <input
            aria-label="Page 8 field 27 input"
            value={values[26]}
            onChange={(event) => updateValue(26, event.target.value)}
          />
          <Component0259
            label="Page 8 field 27"
            value={values[26]}
            onApply={(nextValue) => updateValue(26, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 28">
          <span>Page 8 field 28</span>
          <input
            aria-label="Page 8 field 28 input"
            value={values[27]}
            onChange={(event) => updateValue(27, event.target.value)}
          />
          <Component0088
            label="Page 8 field 28"
            value={values[27]}
            onApply={(nextValue) => updateValue(27, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 29">
          <span>Page 8 field 29</span>
          <input
            aria-label="Page 8 field 29 input"
            value={values[28]}
            onChange={(event) => updateValue(28, event.target.value)}
          />
          <Component0184
            label="Page 8 field 29"
            value={values[28]}
            onApply={(nextValue) => updateValue(28, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 30">
          <span>Page 8 field 30</span>
          <input
            aria-label="Page 8 field 30 input"
            value={values[29]}
            onChange={(event) => updateValue(29, event.target.value)}
          />
          <Component0083
            label="Page 8 field 30"
            value={values[29]}
            onApply={(nextValue) => updateValue(29, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 31">
          <span>Page 8 field 31</span>
          <input
            aria-label="Page 8 field 31 input"
            value={values[30]}
            onChange={(event) => updateValue(30, event.target.value)}
          />
          <Component0156
            label="Page 8 field 31"
            value={values[30]}
            onApply={(nextValue) => updateValue(30, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 32">
          <span>Page 8 field 32</span>
          <input
            aria-label="Page 8 field 32 input"
            value={values[31]}
            onChange={(event) => updateValue(31, event.target.value)}
          />
          <Component0086
            label="Page 8 field 32"
            value={values[31]}
            onApply={(nextValue) => updateValue(31, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 33">
          <span>Page 8 field 33</span>
          <input
            aria-label="Page 8 field 33 input"
            value={values[32]}
            onChange={(event) => updateValue(32, event.target.value)}
          />
          <Component0145
            label="Page 8 field 33"
            value={values[32]}
            onApply={(nextValue) => updateValue(32, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 34">
          <span>Page 8 field 34</span>
          <input
            aria-label="Page 8 field 34 input"
            value={values[33]}
            onChange={(event) => updateValue(33, event.target.value)}
          />
          <Component0118
            label="Page 8 field 34"
            value={values[33]}
            onApply={(nextValue) => updateValue(33, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 35">
          <span>Page 8 field 35</span>
          <input
            aria-label="Page 8 field 35 input"
            value={values[34]}
            onChange={(event) => updateValue(34, event.target.value)}
          />
          <Component0527
            label="Page 8 field 35"
            value={values[34]}
            onApply={(nextValue) => updateValue(34, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 36">
          <span>Page 8 field 36</span>
          <input
            aria-label="Page 8 field 36 input"
            value={values[35]}
            onChange={(event) => updateValue(35, event.target.value)}
          />
          <Component0266
            label="Page 8 field 36"
            value={values[35]}
            onApply={(nextValue) => updateValue(35, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 37">
          <span>Page 8 field 37</span>
          <input
            aria-label="Page 8 field 37 input"
            value={values[36]}
            onChange={(event) => updateValue(36, event.target.value)}
          />
          <Component0421
            label="Page 8 field 37"
            value={values[36]}
            onApply={(nextValue) => updateValue(36, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 38">
          <span>Page 8 field 38</span>
          <input
            aria-label="Page 8 field 38 input"
            value={values[37]}
            onChange={(event) => updateValue(37, event.target.value)}
          />
          <Component0205
            label="Page 8 field 38"
            value={values[37]}
            onApply={(nextValue) => updateValue(37, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 39">
          <span>Page 8 field 39</span>
          <input
            aria-label="Page 8 field 39 input"
            value={values[38]}
            onChange={(event) => updateValue(38, event.target.value)}
          />
          <Component0269
            label="Page 8 field 39"
            value={values[38]}
            onApply={(nextValue) => updateValue(38, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 40">
          <span>Page 8 field 40</span>
          <input
            aria-label="Page 8 field 40 input"
            value={values[39]}
            onChange={(event) => updateValue(39, event.target.value)}
          />
          <Component0033
            label="Page 8 field 40"
            value={values[39]}
            onApply={(nextValue) => updateValue(39, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 41">
          <span>Page 8 field 41</span>
          <input
            aria-label="Page 8 field 41 input"
            value={values[40]}
            onChange={(event) => updateValue(40, event.target.value)}
          />
          <Component0575
            label="Page 8 field 41"
            value={values[40]}
            onApply={(nextValue) => updateValue(40, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 42">
          <span>Page 8 field 42</span>
          <input
            aria-label="Page 8 field 42 input"
            value={values[41]}
            onChange={(event) => updateValue(41, event.target.value)}
          />
          <Component0198
            label="Page 8 field 42"
            value={values[41]}
            onApply={(nextValue) => updateValue(41, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 43">
          <span>Page 8 field 43</span>
          <input
            aria-label="Page 8 field 43 input"
            value={values[42]}
            onChange={(event) => updateValue(42, event.target.value)}
          />
          <Component0996
            label="Page 8 field 43"
            value={values[42]}
            onApply={(nextValue) => updateValue(42, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 44">
          <span>Page 8 field 44</span>
          <input
            aria-label="Page 8 field 44 input"
            value={values[43]}
            onChange={(event) => updateValue(43, event.target.value)}
          />
          <Component0704
            label="Page 8 field 44"
            value={values[43]}
            onApply={(nextValue) => updateValue(43, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 45">
          <span>Page 8 field 45</span>
          <input
            aria-label="Page 8 field 45 input"
            value={values[44]}
            onChange={(event) => updateValue(44, event.target.value)}
          />
          <Component0683
            label="Page 8 field 45"
            value={values[44]}
            onApply={(nextValue) => updateValue(44, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 46">
          <span>Page 8 field 46</span>
          <input
            aria-label="Page 8 field 46 input"
            value={values[45]}
            onChange={(event) => updateValue(45, event.target.value)}
          />
          <Component0543
            label="Page 8 field 46"
            value={values[45]}
            onApply={(nextValue) => updateValue(45, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 47">
          <span>Page 8 field 47</span>
          <input
            aria-label="Page 8 field 47 input"
            value={values[46]}
            onChange={(event) => updateValue(46, event.target.value)}
          />
          <Component0247
            label="Page 8 field 47"
            value={values[46]}
            onApply={(nextValue) => updateValue(46, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 48">
          <span>Page 8 field 48</span>
          <input
            aria-label="Page 8 field 48 input"
            value={values[47]}
            onChange={(event) => updateValue(47, event.target.value)}
          />
          <Component0670
            label="Page 8 field 48"
            value={values[47]}
            onApply={(nextValue) => updateValue(47, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 49">
          <span>Page 8 field 49</span>
          <input
            aria-label="Page 8 field 49 input"
            value={values[48]}
            onChange={(event) => updateValue(48, event.target.value)}
          />
          <Component0587
            label="Page 8 field 49"
            value={values[48]}
            onApply={(nextValue) => updateValue(48, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 50">
          <span>Page 8 field 50</span>
          <input
            aria-label="Page 8 field 50 input"
            value={values[49]}
            onChange={(event) => updateValue(49, event.target.value)}
          />
          <Component0955
            label="Page 8 field 50"
            value={values[49]}
            onApply={(nextValue) => updateValue(49, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 51">
          <span>Page 8 field 51</span>
          <input
            aria-label="Page 8 field 51 input"
            value={values[50]}
            onChange={(event) => updateValue(50, event.target.value)}
          />
          <Component0308
            label="Page 8 field 51"
            value={values[50]}
            onApply={(nextValue) => updateValue(50, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 52">
          <span>Page 8 field 52</span>
          <input
            aria-label="Page 8 field 52 input"
            value={values[51]}
            onChange={(event) => updateValue(51, event.target.value)}
          />
          <Component0295
            label="Page 8 field 52"
            value={values[51]}
            onApply={(nextValue) => updateValue(51, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 53">
          <span>Page 8 field 53</span>
          <input
            aria-label="Page 8 field 53 input"
            value={values[52]}
            onChange={(event) => updateValue(52, event.target.value)}
          />
          <Component0444
            label="Page 8 field 53"
            value={values[52]}
            onApply={(nextValue) => updateValue(52, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 54">
          <span>Page 8 field 54</span>
          <input
            aria-label="Page 8 field 54 input"
            value={values[53]}
            onChange={(event) => updateValue(53, event.target.value)}
          />
          <Component0610
            label="Page 8 field 54"
            value={values[53]}
            onApply={(nextValue) => updateValue(53, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 55">
          <span>Page 8 field 55</span>
          <input
            aria-label="Page 8 field 55 input"
            value={values[54]}
            onChange={(event) => updateValue(54, event.target.value)}
          />
          <Component0833
            label="Page 8 field 55"
            value={values[54]}
            onApply={(nextValue) => updateValue(54, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 56">
          <span>Page 8 field 56</span>
          <input
            aria-label="Page 8 field 56 input"
            value={values[55]}
            onChange={(event) => updateValue(55, event.target.value)}
          />
          <Component0915
            label="Page 8 field 56"
            value={values[55]}
            onApply={(nextValue) => updateValue(55, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 57">
          <span>Page 8 field 57</span>
          <input
            aria-label="Page 8 field 57 input"
            value={values[56]}
            onChange={(event) => updateValue(56, event.target.value)}
          />
          <Component0383
            label="Page 8 field 57"
            value={values[56]}
            onApply={(nextValue) => updateValue(56, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 58">
          <span>Page 8 field 58</span>
          <input
            aria-label="Page 8 field 58 input"
            value={values[57]}
            onChange={(event) => updateValue(57, event.target.value)}
          />
          <Component0872
            label="Page 8 field 58"
            value={values[57]}
            onApply={(nextValue) => updateValue(57, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 59">
          <span>Page 8 field 59</span>
          <input
            aria-label="Page 8 field 59 input"
            value={values[58]}
            onChange={(event) => updateValue(58, event.target.value)}
          />
          <Component0898
            label="Page 8 field 59"
            value={values[58]}
            onApply={(nextValue) => updateValue(58, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 60">
          <span>Page 8 field 60</span>
          <input
            aria-label="Page 8 field 60 input"
            value={values[59]}
            onChange={(event) => updateValue(59, event.target.value)}
          />
          <Component0026
            label="Page 8 field 60"
            value={values[59]}
            onApply={(nextValue) => updateValue(59, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 61">
          <span>Page 8 field 61</span>
          <input
            aria-label="Page 8 field 61 input"
            value={values[60]}
            onChange={(event) => updateValue(60, event.target.value)}
          />
          <Component0323
            label="Page 8 field 61"
            value={values[60]}
            onApply={(nextValue) => updateValue(60, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 62">
          <span>Page 8 field 62</span>
          <input
            aria-label="Page 8 field 62 input"
            value={values[61]}
            onChange={(event) => updateValue(61, event.target.value)}
          />
          <Component0983
            label="Page 8 field 62"
            value={values[61]}
            onApply={(nextValue) => updateValue(61, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 63">
          <span>Page 8 field 63</span>
          <input
            aria-label="Page 8 field 63 input"
            value={values[62]}
            onChange={(event) => updateValue(62, event.target.value)}
          />
          <Component0843
            label="Page 8 field 63"
            value={values[62]}
            onApply={(nextValue) => updateValue(62, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 64">
          <span>Page 8 field 64</span>
          <input
            aria-label="Page 8 field 64 input"
            value={values[63]}
            onChange={(event) => updateValue(63, event.target.value)}
          />
          <Component0678
            label="Page 8 field 64"
            value={values[63]}
            onApply={(nextValue) => updateValue(63, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 65">
          <span>Page 8 field 65</span>
          <input
            aria-label="Page 8 field 65 input"
            value={values[64]}
            onChange={(event) => updateValue(64, event.target.value)}
          />
          <Component0633
            label="Page 8 field 65"
            value={values[64]}
            onApply={(nextValue) => updateValue(64, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 66">
          <span>Page 8 field 66</span>
          <input
            aria-label="Page 8 field 66 input"
            value={values[65]}
            onChange={(event) => updateValue(65, event.target.value)}
          />
          <Component0106
            label="Page 8 field 66"
            value={values[65]}
            onApply={(nextValue) => updateValue(65, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 67">
          <span>Page 8 field 67</span>
          <input
            aria-label="Page 8 field 67 input"
            value={values[66]}
            onChange={(event) => updateValue(66, event.target.value)}
          />
          <Component0864
            label="Page 8 field 67"
            value={values[66]}
            onApply={(nextValue) => updateValue(66, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 68">
          <span>Page 8 field 68</span>
          <input
            aria-label="Page 8 field 68 input"
            value={values[67]}
            onChange={(event) => updateValue(67, event.target.value)}
          />
          <Component0638
            label="Page 8 field 68"
            value={values[67]}
            onApply={(nextValue) => updateValue(67, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 69">
          <span>Page 8 field 69</span>
          <input
            aria-label="Page 8 field 69 input"
            value={values[68]}
            onChange={(event) => updateValue(68, event.target.value)}
          />
          <Component0178
            label="Page 8 field 69"
            value={values[68]}
            onApply={(nextValue) => updateValue(68, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 70">
          <span>Page 8 field 70</span>
          <input
            aria-label="Page 8 field 70 input"
            value={values[69]}
            onChange={(event) => updateValue(69, event.target.value)}
          />
          <Component0502
            label="Page 8 field 70"
            value={values[69]}
            onApply={(nextValue) => updateValue(69, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 71">
          <span>Page 8 field 71</span>
          <input
            aria-label="Page 8 field 71 input"
            value={values[70]}
            onChange={(event) => updateValue(70, event.target.value)}
          />
          <Component0852
            label="Page 8 field 71"
            value={values[70]}
            onApply={(nextValue) => updateValue(70, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 72">
          <span>Page 8 field 72</span>
          <input
            aria-label="Page 8 field 72 input"
            value={values[71]}
            onChange={(event) => updateValue(71, event.target.value)}
          />
          <Component0397
            label="Page 8 field 72"
            value={values[71]}
            onApply={(nextValue) => updateValue(71, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 73">
          <span>Page 8 field 73</span>
          <input
            aria-label="Page 8 field 73 input"
            value={values[72]}
            onChange={(event) => updateValue(72, event.target.value)}
          />
          <Component0416
            label="Page 8 field 73"
            value={values[72]}
            onApply={(nextValue) => updateValue(72, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 74">
          <span>Page 8 field 74</span>
          <input
            aria-label="Page 8 field 74 input"
            value={values[73]}
            onChange={(event) => updateValue(73, event.target.value)}
          />
          <Component0582
            label="Page 8 field 74"
            value={values[73]}
            onApply={(nextValue) => updateValue(73, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 75">
          <span>Page 8 field 75</span>
          <input
            aria-label="Page 8 field 75 input"
            value={values[74]}
            onChange={(event) => updateValue(74, event.target.value)}
          />
          <Component0453
            label="Page 8 field 75"
            value={values[74]}
            onApply={(nextValue) => updateValue(74, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 76">
          <span>Page 8 field 76</span>
          <input
            aria-label="Page 8 field 76 input"
            value={values[75]}
            onChange={(event) => updateValue(75, event.target.value)}
          />
          <Component0668
            label="Page 8 field 76"
            value={values[75]}
            onApply={(nextValue) => updateValue(75, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 77">
          <span>Page 8 field 77</span>
          <input
            aria-label="Page 8 field 77 input"
            value={values[76]}
            onChange={(event) => updateValue(76, event.target.value)}
          />
          <Component0172
            label="Page 8 field 77"
            value={values[76]}
            onApply={(nextValue) => updateValue(76, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 78">
          <span>Page 8 field 78</span>
          <input
            aria-label="Page 8 field 78 input"
            value={values[77]}
            onChange={(event) => updateValue(77, event.target.value)}
          />
          <Component0049
            label="Page 8 field 78"
            value={values[77]}
            onApply={(nextValue) => updateValue(77, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 79">
          <span>Page 8 field 79</span>
          <input
            aria-label="Page 8 field 79 input"
            value={values[78]}
            onChange={(event) => updateValue(78, event.target.value)}
          />
          <Component0490
            label="Page 8 field 79"
            value={values[78]}
            onApply={(nextValue) => updateValue(78, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 80">
          <span>Page 8 field 80</span>
          <input
            aria-label="Page 8 field 80 input"
            value={values[79]}
            onChange={(event) => updateValue(79, event.target.value)}
          />
          <Component0023
            label="Page 8 field 80"
            value={values[79]}
            onApply={(nextValue) => updateValue(79, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 81">
          <span>Page 8 field 81</span>
          <input
            aria-label="Page 8 field 81 input"
            value={values[80]}
            onChange={(event) => updateValue(80, event.target.value)}
          />
          <Component0806
            label="Page 8 field 81"
            value={values[80]}
            onApply={(nextValue) => updateValue(80, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 82">
          <span>Page 8 field 82</span>
          <input
            aria-label="Page 8 field 82 input"
            value={values[81]}
            onChange={(event) => updateValue(81, event.target.value)}
          />
          <Component0958
            label="Page 8 field 82"
            value={values[81]}
            onApply={(nextValue) => updateValue(81, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 83">
          <span>Page 8 field 83</span>
          <input
            aria-label="Page 8 field 83 input"
            value={values[82]}
            onChange={(event) => updateValue(82, event.target.value)}
          />
          <Component0484
            label="Page 8 field 83"
            value={values[82]}
            onApply={(nextValue) => updateValue(82, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 84">
          <span>Page 8 field 84</span>
          <input
            aria-label="Page 8 field 84 input"
            value={values[83]}
            onChange={(event) => updateValue(83, event.target.value)}
          />
          <Component0675
            label="Page 8 field 84"
            value={values[83]}
            onApply={(nextValue) => updateValue(83, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 85">
          <span>Page 8 field 85</span>
          <input
            aria-label="Page 8 field 85 input"
            value={values[84]}
            onChange={(event) => updateValue(84, event.target.value)}
          />
          <Component0012
            label="Page 8 field 85"
            value={values[84]}
            onApply={(nextValue) => updateValue(84, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 86">
          <span>Page 8 field 86</span>
          <input
            aria-label="Page 8 field 86 input"
            value={values[85]}
            onChange={(event) => updateValue(85, event.target.value)}
          />
          <Component0368
            label="Page 8 field 86"
            value={values[85]}
            onApply={(nextValue) => updateValue(85, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 87">
          <span>Page 8 field 87</span>
          <input
            aria-label="Page 8 field 87 input"
            value={values[86]}
            onChange={(event) => updateValue(86, event.target.value)}
          />
          <Component0340
            label="Page 8 field 87"
            value={values[86]}
            onApply={(nextValue) => updateValue(86, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 88">
          <span>Page 8 field 88</span>
          <input
            aria-label="Page 8 field 88 input"
            value={values[87]}
            onChange={(event) => updateValue(87, event.target.value)}
          />
          <Component0690
            label="Page 8 field 88"
            value={values[87]}
            onApply={(nextValue) => updateValue(87, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 89">
          <span>Page 8 field 89</span>
          <input
            aria-label="Page 8 field 89 input"
            value={values[88]}
            onChange={(event) => updateValue(88, event.target.value)}
          />
          <Component0363
            label="Page 8 field 89"
            value={values[88]}
            onApply={(nextValue) => updateValue(88, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 90">
          <span>Page 8 field 90</span>
          <input
            aria-label="Page 8 field 90 input"
            value={values[89]}
            onChange={(event) => updateValue(89, event.target.value)}
          />
          <Component0123
            label="Page 8 field 90"
            value={values[89]}
            onApply={(nextValue) => updateValue(89, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 91">
          <span>Page 8 field 91</span>
          <input
            aria-label="Page 8 field 91 input"
            value={values[90]}
            onChange={(event) => updateValue(90, event.target.value)}
          />
          <Component0700
            label="Page 8 field 91"
            value={values[90]}
            onApply={(nextValue) => updateValue(90, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 92">
          <span>Page 8 field 92</span>
          <input
            aria-label="Page 8 field 92 input"
            value={values[91]}
            onChange={(event) => updateValue(91, event.target.value)}
          />
          <Component0926
            label="Page 8 field 92"
            value={values[91]}
            onApply={(nextValue) => updateValue(91, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 93">
          <span>Page 8 field 93</span>
          <input
            aria-label="Page 8 field 93 input"
            value={values[92]}
            onChange={(event) => updateValue(92, event.target.value)}
          />
          <Component0849
            label="Page 8 field 93"
            value={values[92]}
            onApply={(nextValue) => updateValue(92, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 94">
          <span>Page 8 field 94</span>
          <input
            aria-label="Page 8 field 94 input"
            value={values[93]}
            onChange={(event) => updateValue(93, event.target.value)}
          />
          <Component0696
            label="Page 8 field 94"
            value={values[93]}
            onApply={(nextValue) => updateValue(93, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 95">
          <span>Page 8 field 95</span>
          <input
            aria-label="Page 8 field 95 input"
            value={values[94]}
            onChange={(event) => updateValue(94, event.target.value)}
          />
          <Component0977
            label="Page 8 field 95"
            value={values[94]}
            onApply={(nextValue) => updateValue(94, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 96">
          <span>Page 8 field 96</span>
          <input
            aria-label="Page 8 field 96 input"
            value={values[95]}
            onChange={(event) => updateValue(95, event.target.value)}
          />
          <Component0648
            label="Page 8 field 96"
            value={values[95]}
            onApply={(nextValue) => updateValue(95, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 97">
          <span>Page 8 field 97</span>
          <input
            aria-label="Page 8 field 97 input"
            value={values[96]}
            onChange={(event) => updateValue(96, event.target.value)}
          />
          <Component0228
            label="Page 8 field 97"
            value={values[96]}
            onApply={(nextValue) => updateValue(96, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 98">
          <span>Page 8 field 98</span>
          <input
            aria-label="Page 8 field 98 input"
            value={values[97]}
            onChange={(event) => updateValue(97, event.target.value)}
          />
          <Component0720
            label="Page 8 field 98"
            value={values[97]}
            onApply={(nextValue) => updateValue(97, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 99">
          <span>Page 8 field 99</span>
          <input
            aria-label="Page 8 field 99 input"
            value={values[98]}
            onChange={(event) => updateValue(98, event.target.value)}
          />
          <Component0779
            label="Page 8 field 99"
            value={values[98]}
            onApply={(nextValue) => updateValue(98, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 8 field 100">
          <span>Page 8 field 100</span>
          <input
            aria-label="Page 8 field 100 input"
            value={values[99]}
            onChange={(event) => updateValue(99, event.target.value)}
          />
          <Component0398
            label="Page 8 field 100"
            value={values[99]}
            onApply={(nextValue) => updateValue(99, nextValue)}
          />
        </label>
      
          </div>
        </section>
      );
    }
