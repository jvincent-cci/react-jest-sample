import { useState } from 'react';
    import { Component0847 } from '../components/generated/Component0847';
import { Component0735 } from '../components/generated/Component0735';
import { Component0685 } from '../components/generated/Component0685';
import { Component0266 } from '../components/generated/Component0266';
import { Component0071 } from '../components/generated/Component0071';
import { Component0960 } from '../components/generated/Component0960';
import { Component0186 } from '../components/generated/Component0186';
import { Component0117 } from '../components/generated/Component0117';
import { Component0946 } from '../components/generated/Component0946';
import { Component0681 } from '../components/generated/Component0681';
import { Component0070 } from '../components/generated/Component0070';
import { Component0984 } from '../components/generated/Component0984';
import { Component0313 } from '../components/generated/Component0313';
import { Component0891 } from '../components/generated/Component0891';
import { Component0556 } from '../components/generated/Component0556';
import { Component0865 } from '../components/generated/Component0865';
import { Component0808 } from '../components/generated/Component0808';
import { Component0069 } from '../components/generated/Component0069';
import { Component0778 } from '../components/generated/Component0778';
import { Component0454 } from '../components/generated/Component0454';
import { Component0468 } from '../components/generated/Component0468';
import { Component0241 } from '../components/generated/Component0241';
import { Component0439 } from '../components/generated/Component0439';
import { Component0573 } from '../components/generated/Component0573';
import { Component0887 } from '../components/generated/Component0887';
import { Component0717 } from '../components/generated/Component0717';
import { Component0703 } from '../components/generated/Component0703';
import { Component0307 } from '../components/generated/Component0307';
import { Component0122 } from '../components/generated/Component0122';
import { Component0137 } from '../components/generated/Component0137';
import { Component0675 } from '../components/generated/Component0675';
import { Component0124 } from '../components/generated/Component0124';
import { Component0816 } from '../components/generated/Component0816';
import { Component0726 } from '../components/generated/Component0726';
import { Component0018 } from '../components/generated/Component0018';
import { Component0483 } from '../components/generated/Component0483';
import { Component0223 } from '../components/generated/Component0223';
import { Component0888 } from '../components/generated/Component0888';
import { Component0571 } from '../components/generated/Component0571';
import { Component0707 } from '../components/generated/Component0707';
import { Component0103 } from '../components/generated/Component0103';
import { Component0544 } from '../components/generated/Component0544';
import { Component0007 } from '../components/generated/Component0007';
import { Component0123 } from '../components/generated/Component0123';
import { Component0832 } from '../components/generated/Component0832';
import { Component0897 } from '../components/generated/Component0897';
import { Component0748 } from '../components/generated/Component0748';
import { Component0143 } from '../components/generated/Component0143';
import { Component0093 } from '../components/generated/Component0093';
import { Component0722 } from '../components/generated/Component0722';
import { Component0026 } from '../components/generated/Component0026';
import { Component0305 } from '../components/generated/Component0305';
import { Component0244 } from '../components/generated/Component0244';
import { Component0693 } from '../components/generated/Component0693';
import { Component0391 } from '../components/generated/Component0391';
import { Component0534 } from '../components/generated/Component0534';
import { Component0962 } from '../components/generated/Component0962';
import { Component0438 } from '../components/generated/Component0438';
import { Component0664 } from '../components/generated/Component0664';
import { Component0989 } from '../components/generated/Component0989';
import { Component0551 } from '../components/generated/Component0551';
import { Component0720 } from '../components/generated/Component0720';
import { Component0654 } from '../components/generated/Component0654';
import { Component0937 } from '../components/generated/Component0937';
import { Component0765 } from '../components/generated/Component0765';
import { Component0297 } from '../components/generated/Component0297';
import { Component0727 } from '../components/generated/Component0727';
import { Component0523 } from '../components/generated/Component0523';
import { Component0933 } from '../components/generated/Component0933';
import { Component0902 } from '../components/generated/Component0902';
import { Component0589 } from '../components/generated/Component0589';
import { Component0453 } from '../components/generated/Component0453';
import { Component0292 } from '../components/generated/Component0292';
import { Component0899 } from '../components/generated/Component0899';
import { Component0025 } from '../components/generated/Component0025';
import { Component0155 } from '../components/generated/Component0155';
import { Component0048 } from '../components/generated/Component0048';
import { Component0257 } from '../components/generated/Component0257';
import { Component0954 } from '../components/generated/Component0954';
import { Component0710 } from '../components/generated/Component0710';
import { Component0944 } from '../components/generated/Component0944';
import { Component0214 } from '../components/generated/Component0214';
import { Component0587 } from '../components/generated/Component0587';
import { Component0184 } from '../components/generated/Component0184';
import { Component0480 } from '../components/generated/Component0480';
import { Component0005 } from '../components/generated/Component0005';
import { Component0435 } from '../components/generated/Component0435';
import { Component0039 } from '../components/generated/Component0039';
import { Component0218 } from '../components/generated/Component0218';
import { Component0549 } from '../components/generated/Component0549';
import { Component0135 } from '../components/generated/Component0135';
import { Component0629 } from '../components/generated/Component0629';
import { Component0981 } from '../components/generated/Component0981';
import { Component0294 } from '../components/generated/Component0294';
import { Component0651 } from '../components/generated/Component0651';
import { Component0133 } from '../components/generated/Component0133';
import { Component0219 } from '../components/generated/Component0219';
import { Component0615 } from '../components/generated/Component0615';
import { Component0064 } from '../components/generated/Component0064';
import { Component0991 } from '../components/generated/Component0991';

    const initialValues = Array.from({ length: 100 }, (_, index) => `page-9-value-${index + 1}`);

    export function Page9() {
      const [values, setValues] = useState(initialValues);

      const updateValue = (index: number, value: string) => {
        setValues((currentValues) =>
          currentValues.map((currentValue, currentIndex) => (currentIndex === index ? value : currentValue)),
        );
      };

      return (
        <section aria-labelledby="page-9-title">
          <h2 id="page-9-title">Page 9</h2>
          <div className="input-grid">
            
        <label className="input-card" key="Page 9 field 1">
          <span>Page 9 field 1</span>
          <input
            aria-label="Page 9 field 1 input"
            value={values[0]}
            onChange={(event) => updateValue(0, event.target.value)}
          />
          <Component0847
            label="Page 9 field 1"
            value={values[0]}
            onApply={(nextValue) => updateValue(0, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 2">
          <span>Page 9 field 2</span>
          <input
            aria-label="Page 9 field 2 input"
            value={values[1]}
            onChange={(event) => updateValue(1, event.target.value)}
          />
          <Component0735
            label="Page 9 field 2"
            value={values[1]}
            onApply={(nextValue) => updateValue(1, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 3">
          <span>Page 9 field 3</span>
          <input
            aria-label="Page 9 field 3 input"
            value={values[2]}
            onChange={(event) => updateValue(2, event.target.value)}
          />
          <Component0685
            label="Page 9 field 3"
            value={values[2]}
            onApply={(nextValue) => updateValue(2, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 4">
          <span>Page 9 field 4</span>
          <input
            aria-label="Page 9 field 4 input"
            value={values[3]}
            onChange={(event) => updateValue(3, event.target.value)}
          />
          <Component0266
            label="Page 9 field 4"
            value={values[3]}
            onApply={(nextValue) => updateValue(3, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 5">
          <span>Page 9 field 5</span>
          <input
            aria-label="Page 9 field 5 input"
            value={values[4]}
            onChange={(event) => updateValue(4, event.target.value)}
          />
          <Component0071
            label="Page 9 field 5"
            value={values[4]}
            onApply={(nextValue) => updateValue(4, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 6">
          <span>Page 9 field 6</span>
          <input
            aria-label="Page 9 field 6 input"
            value={values[5]}
            onChange={(event) => updateValue(5, event.target.value)}
          />
          <Component0960
            label="Page 9 field 6"
            value={values[5]}
            onApply={(nextValue) => updateValue(5, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 7">
          <span>Page 9 field 7</span>
          <input
            aria-label="Page 9 field 7 input"
            value={values[6]}
            onChange={(event) => updateValue(6, event.target.value)}
          />
          <Component0186
            label="Page 9 field 7"
            value={values[6]}
            onApply={(nextValue) => updateValue(6, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 8">
          <span>Page 9 field 8</span>
          <input
            aria-label="Page 9 field 8 input"
            value={values[7]}
            onChange={(event) => updateValue(7, event.target.value)}
          />
          <Component0117
            label="Page 9 field 8"
            value={values[7]}
            onApply={(nextValue) => updateValue(7, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 9">
          <span>Page 9 field 9</span>
          <input
            aria-label="Page 9 field 9 input"
            value={values[8]}
            onChange={(event) => updateValue(8, event.target.value)}
          />
          <Component0946
            label="Page 9 field 9"
            value={values[8]}
            onApply={(nextValue) => updateValue(8, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 10">
          <span>Page 9 field 10</span>
          <input
            aria-label="Page 9 field 10 input"
            value={values[9]}
            onChange={(event) => updateValue(9, event.target.value)}
          />
          <Component0681
            label="Page 9 field 10"
            value={values[9]}
            onApply={(nextValue) => updateValue(9, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 11">
          <span>Page 9 field 11</span>
          <input
            aria-label="Page 9 field 11 input"
            value={values[10]}
            onChange={(event) => updateValue(10, event.target.value)}
          />
          <Component0070
            label="Page 9 field 11"
            value={values[10]}
            onApply={(nextValue) => updateValue(10, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 12">
          <span>Page 9 field 12</span>
          <input
            aria-label="Page 9 field 12 input"
            value={values[11]}
            onChange={(event) => updateValue(11, event.target.value)}
          />
          <Component0984
            label="Page 9 field 12"
            value={values[11]}
            onApply={(nextValue) => updateValue(11, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 13">
          <span>Page 9 field 13</span>
          <input
            aria-label="Page 9 field 13 input"
            value={values[12]}
            onChange={(event) => updateValue(12, event.target.value)}
          />
          <Component0313
            label="Page 9 field 13"
            value={values[12]}
            onApply={(nextValue) => updateValue(12, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 14">
          <span>Page 9 field 14</span>
          <input
            aria-label="Page 9 field 14 input"
            value={values[13]}
            onChange={(event) => updateValue(13, event.target.value)}
          />
          <Component0891
            label="Page 9 field 14"
            value={values[13]}
            onApply={(nextValue) => updateValue(13, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 15">
          <span>Page 9 field 15</span>
          <input
            aria-label="Page 9 field 15 input"
            value={values[14]}
            onChange={(event) => updateValue(14, event.target.value)}
          />
          <Component0556
            label="Page 9 field 15"
            value={values[14]}
            onApply={(nextValue) => updateValue(14, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 16">
          <span>Page 9 field 16</span>
          <input
            aria-label="Page 9 field 16 input"
            value={values[15]}
            onChange={(event) => updateValue(15, event.target.value)}
          />
          <Component0865
            label="Page 9 field 16"
            value={values[15]}
            onApply={(nextValue) => updateValue(15, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 17">
          <span>Page 9 field 17</span>
          <input
            aria-label="Page 9 field 17 input"
            value={values[16]}
            onChange={(event) => updateValue(16, event.target.value)}
          />
          <Component0808
            label="Page 9 field 17"
            value={values[16]}
            onApply={(nextValue) => updateValue(16, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 18">
          <span>Page 9 field 18</span>
          <input
            aria-label="Page 9 field 18 input"
            value={values[17]}
            onChange={(event) => updateValue(17, event.target.value)}
          />
          <Component0069
            label="Page 9 field 18"
            value={values[17]}
            onApply={(nextValue) => updateValue(17, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 19">
          <span>Page 9 field 19</span>
          <input
            aria-label="Page 9 field 19 input"
            value={values[18]}
            onChange={(event) => updateValue(18, event.target.value)}
          />
          <Component0778
            label="Page 9 field 19"
            value={values[18]}
            onApply={(nextValue) => updateValue(18, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 20">
          <span>Page 9 field 20</span>
          <input
            aria-label="Page 9 field 20 input"
            value={values[19]}
            onChange={(event) => updateValue(19, event.target.value)}
          />
          <Component0454
            label="Page 9 field 20"
            value={values[19]}
            onApply={(nextValue) => updateValue(19, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 21">
          <span>Page 9 field 21</span>
          <input
            aria-label="Page 9 field 21 input"
            value={values[20]}
            onChange={(event) => updateValue(20, event.target.value)}
          />
          <Component0468
            label="Page 9 field 21"
            value={values[20]}
            onApply={(nextValue) => updateValue(20, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 22">
          <span>Page 9 field 22</span>
          <input
            aria-label="Page 9 field 22 input"
            value={values[21]}
            onChange={(event) => updateValue(21, event.target.value)}
          />
          <Component0241
            label="Page 9 field 22"
            value={values[21]}
            onApply={(nextValue) => updateValue(21, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 23">
          <span>Page 9 field 23</span>
          <input
            aria-label="Page 9 field 23 input"
            value={values[22]}
            onChange={(event) => updateValue(22, event.target.value)}
          />
          <Component0439
            label="Page 9 field 23"
            value={values[22]}
            onApply={(nextValue) => updateValue(22, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 24">
          <span>Page 9 field 24</span>
          <input
            aria-label="Page 9 field 24 input"
            value={values[23]}
            onChange={(event) => updateValue(23, event.target.value)}
          />
          <Component0573
            label="Page 9 field 24"
            value={values[23]}
            onApply={(nextValue) => updateValue(23, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 25">
          <span>Page 9 field 25</span>
          <input
            aria-label="Page 9 field 25 input"
            value={values[24]}
            onChange={(event) => updateValue(24, event.target.value)}
          />
          <Component0887
            label="Page 9 field 25"
            value={values[24]}
            onApply={(nextValue) => updateValue(24, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 26">
          <span>Page 9 field 26</span>
          <input
            aria-label="Page 9 field 26 input"
            value={values[25]}
            onChange={(event) => updateValue(25, event.target.value)}
          />
          <Component0717
            label="Page 9 field 26"
            value={values[25]}
            onApply={(nextValue) => updateValue(25, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 27">
          <span>Page 9 field 27</span>
          <input
            aria-label="Page 9 field 27 input"
            value={values[26]}
            onChange={(event) => updateValue(26, event.target.value)}
          />
          <Component0703
            label="Page 9 field 27"
            value={values[26]}
            onApply={(nextValue) => updateValue(26, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 28">
          <span>Page 9 field 28</span>
          <input
            aria-label="Page 9 field 28 input"
            value={values[27]}
            onChange={(event) => updateValue(27, event.target.value)}
          />
          <Component0307
            label="Page 9 field 28"
            value={values[27]}
            onApply={(nextValue) => updateValue(27, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 29">
          <span>Page 9 field 29</span>
          <input
            aria-label="Page 9 field 29 input"
            value={values[28]}
            onChange={(event) => updateValue(28, event.target.value)}
          />
          <Component0122
            label="Page 9 field 29"
            value={values[28]}
            onApply={(nextValue) => updateValue(28, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 30">
          <span>Page 9 field 30</span>
          <input
            aria-label="Page 9 field 30 input"
            value={values[29]}
            onChange={(event) => updateValue(29, event.target.value)}
          />
          <Component0137
            label="Page 9 field 30"
            value={values[29]}
            onApply={(nextValue) => updateValue(29, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 31">
          <span>Page 9 field 31</span>
          <input
            aria-label="Page 9 field 31 input"
            value={values[30]}
            onChange={(event) => updateValue(30, event.target.value)}
          />
          <Component0675
            label="Page 9 field 31"
            value={values[30]}
            onApply={(nextValue) => updateValue(30, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 32">
          <span>Page 9 field 32</span>
          <input
            aria-label="Page 9 field 32 input"
            value={values[31]}
            onChange={(event) => updateValue(31, event.target.value)}
          />
          <Component0124
            label="Page 9 field 32"
            value={values[31]}
            onApply={(nextValue) => updateValue(31, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 33">
          <span>Page 9 field 33</span>
          <input
            aria-label="Page 9 field 33 input"
            value={values[32]}
            onChange={(event) => updateValue(32, event.target.value)}
          />
          <Component0816
            label="Page 9 field 33"
            value={values[32]}
            onApply={(nextValue) => updateValue(32, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 34">
          <span>Page 9 field 34</span>
          <input
            aria-label="Page 9 field 34 input"
            value={values[33]}
            onChange={(event) => updateValue(33, event.target.value)}
          />
          <Component0726
            label="Page 9 field 34"
            value={values[33]}
            onApply={(nextValue) => updateValue(33, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 35">
          <span>Page 9 field 35</span>
          <input
            aria-label="Page 9 field 35 input"
            value={values[34]}
            onChange={(event) => updateValue(34, event.target.value)}
          />
          <Component0018
            label="Page 9 field 35"
            value={values[34]}
            onApply={(nextValue) => updateValue(34, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 36">
          <span>Page 9 field 36</span>
          <input
            aria-label="Page 9 field 36 input"
            value={values[35]}
            onChange={(event) => updateValue(35, event.target.value)}
          />
          <Component0483
            label="Page 9 field 36"
            value={values[35]}
            onApply={(nextValue) => updateValue(35, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 37">
          <span>Page 9 field 37</span>
          <input
            aria-label="Page 9 field 37 input"
            value={values[36]}
            onChange={(event) => updateValue(36, event.target.value)}
          />
          <Component0223
            label="Page 9 field 37"
            value={values[36]}
            onApply={(nextValue) => updateValue(36, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 38">
          <span>Page 9 field 38</span>
          <input
            aria-label="Page 9 field 38 input"
            value={values[37]}
            onChange={(event) => updateValue(37, event.target.value)}
          />
          <Component0888
            label="Page 9 field 38"
            value={values[37]}
            onApply={(nextValue) => updateValue(37, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 39">
          <span>Page 9 field 39</span>
          <input
            aria-label="Page 9 field 39 input"
            value={values[38]}
            onChange={(event) => updateValue(38, event.target.value)}
          />
          <Component0571
            label="Page 9 field 39"
            value={values[38]}
            onApply={(nextValue) => updateValue(38, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 40">
          <span>Page 9 field 40</span>
          <input
            aria-label="Page 9 field 40 input"
            value={values[39]}
            onChange={(event) => updateValue(39, event.target.value)}
          />
          <Component0707
            label="Page 9 field 40"
            value={values[39]}
            onApply={(nextValue) => updateValue(39, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 41">
          <span>Page 9 field 41</span>
          <input
            aria-label="Page 9 field 41 input"
            value={values[40]}
            onChange={(event) => updateValue(40, event.target.value)}
          />
          <Component0103
            label="Page 9 field 41"
            value={values[40]}
            onApply={(nextValue) => updateValue(40, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 42">
          <span>Page 9 field 42</span>
          <input
            aria-label="Page 9 field 42 input"
            value={values[41]}
            onChange={(event) => updateValue(41, event.target.value)}
          />
          <Component0544
            label="Page 9 field 42"
            value={values[41]}
            onApply={(nextValue) => updateValue(41, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 43">
          <span>Page 9 field 43</span>
          <input
            aria-label="Page 9 field 43 input"
            value={values[42]}
            onChange={(event) => updateValue(42, event.target.value)}
          />
          <Component0007
            label="Page 9 field 43"
            value={values[42]}
            onApply={(nextValue) => updateValue(42, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 44">
          <span>Page 9 field 44</span>
          <input
            aria-label="Page 9 field 44 input"
            value={values[43]}
            onChange={(event) => updateValue(43, event.target.value)}
          />
          <Component0123
            label="Page 9 field 44"
            value={values[43]}
            onApply={(nextValue) => updateValue(43, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 45">
          <span>Page 9 field 45</span>
          <input
            aria-label="Page 9 field 45 input"
            value={values[44]}
            onChange={(event) => updateValue(44, event.target.value)}
          />
          <Component0832
            label="Page 9 field 45"
            value={values[44]}
            onApply={(nextValue) => updateValue(44, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 46">
          <span>Page 9 field 46</span>
          <input
            aria-label="Page 9 field 46 input"
            value={values[45]}
            onChange={(event) => updateValue(45, event.target.value)}
          />
          <Component0897
            label="Page 9 field 46"
            value={values[45]}
            onApply={(nextValue) => updateValue(45, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 47">
          <span>Page 9 field 47</span>
          <input
            aria-label="Page 9 field 47 input"
            value={values[46]}
            onChange={(event) => updateValue(46, event.target.value)}
          />
          <Component0748
            label="Page 9 field 47"
            value={values[46]}
            onApply={(nextValue) => updateValue(46, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 48">
          <span>Page 9 field 48</span>
          <input
            aria-label="Page 9 field 48 input"
            value={values[47]}
            onChange={(event) => updateValue(47, event.target.value)}
          />
          <Component0143
            label="Page 9 field 48"
            value={values[47]}
            onApply={(nextValue) => updateValue(47, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 49">
          <span>Page 9 field 49</span>
          <input
            aria-label="Page 9 field 49 input"
            value={values[48]}
            onChange={(event) => updateValue(48, event.target.value)}
          />
          <Component0093
            label="Page 9 field 49"
            value={values[48]}
            onApply={(nextValue) => updateValue(48, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 50">
          <span>Page 9 field 50</span>
          <input
            aria-label="Page 9 field 50 input"
            value={values[49]}
            onChange={(event) => updateValue(49, event.target.value)}
          />
          <Component0722
            label="Page 9 field 50"
            value={values[49]}
            onApply={(nextValue) => updateValue(49, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 51">
          <span>Page 9 field 51</span>
          <input
            aria-label="Page 9 field 51 input"
            value={values[50]}
            onChange={(event) => updateValue(50, event.target.value)}
          />
          <Component0026
            label="Page 9 field 51"
            value={values[50]}
            onApply={(nextValue) => updateValue(50, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 52">
          <span>Page 9 field 52</span>
          <input
            aria-label="Page 9 field 52 input"
            value={values[51]}
            onChange={(event) => updateValue(51, event.target.value)}
          />
          <Component0305
            label="Page 9 field 52"
            value={values[51]}
            onApply={(nextValue) => updateValue(51, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 53">
          <span>Page 9 field 53</span>
          <input
            aria-label="Page 9 field 53 input"
            value={values[52]}
            onChange={(event) => updateValue(52, event.target.value)}
          />
          <Component0244
            label="Page 9 field 53"
            value={values[52]}
            onApply={(nextValue) => updateValue(52, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 54">
          <span>Page 9 field 54</span>
          <input
            aria-label="Page 9 field 54 input"
            value={values[53]}
            onChange={(event) => updateValue(53, event.target.value)}
          />
          <Component0693
            label="Page 9 field 54"
            value={values[53]}
            onApply={(nextValue) => updateValue(53, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 55">
          <span>Page 9 field 55</span>
          <input
            aria-label="Page 9 field 55 input"
            value={values[54]}
            onChange={(event) => updateValue(54, event.target.value)}
          />
          <Component0391
            label="Page 9 field 55"
            value={values[54]}
            onApply={(nextValue) => updateValue(54, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 56">
          <span>Page 9 field 56</span>
          <input
            aria-label="Page 9 field 56 input"
            value={values[55]}
            onChange={(event) => updateValue(55, event.target.value)}
          />
          <Component0534
            label="Page 9 field 56"
            value={values[55]}
            onApply={(nextValue) => updateValue(55, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 57">
          <span>Page 9 field 57</span>
          <input
            aria-label="Page 9 field 57 input"
            value={values[56]}
            onChange={(event) => updateValue(56, event.target.value)}
          />
          <Component0962
            label="Page 9 field 57"
            value={values[56]}
            onApply={(nextValue) => updateValue(56, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 58">
          <span>Page 9 field 58</span>
          <input
            aria-label="Page 9 field 58 input"
            value={values[57]}
            onChange={(event) => updateValue(57, event.target.value)}
          />
          <Component0438
            label="Page 9 field 58"
            value={values[57]}
            onApply={(nextValue) => updateValue(57, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 59">
          <span>Page 9 field 59</span>
          <input
            aria-label="Page 9 field 59 input"
            value={values[58]}
            onChange={(event) => updateValue(58, event.target.value)}
          />
          <Component0664
            label="Page 9 field 59"
            value={values[58]}
            onApply={(nextValue) => updateValue(58, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 60">
          <span>Page 9 field 60</span>
          <input
            aria-label="Page 9 field 60 input"
            value={values[59]}
            onChange={(event) => updateValue(59, event.target.value)}
          />
          <Component0989
            label="Page 9 field 60"
            value={values[59]}
            onApply={(nextValue) => updateValue(59, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 61">
          <span>Page 9 field 61</span>
          <input
            aria-label="Page 9 field 61 input"
            value={values[60]}
            onChange={(event) => updateValue(60, event.target.value)}
          />
          <Component0551
            label="Page 9 field 61"
            value={values[60]}
            onApply={(nextValue) => updateValue(60, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 62">
          <span>Page 9 field 62</span>
          <input
            aria-label="Page 9 field 62 input"
            value={values[61]}
            onChange={(event) => updateValue(61, event.target.value)}
          />
          <Component0720
            label="Page 9 field 62"
            value={values[61]}
            onApply={(nextValue) => updateValue(61, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 63">
          <span>Page 9 field 63</span>
          <input
            aria-label="Page 9 field 63 input"
            value={values[62]}
            onChange={(event) => updateValue(62, event.target.value)}
          />
          <Component0654
            label="Page 9 field 63"
            value={values[62]}
            onApply={(nextValue) => updateValue(62, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 64">
          <span>Page 9 field 64</span>
          <input
            aria-label="Page 9 field 64 input"
            value={values[63]}
            onChange={(event) => updateValue(63, event.target.value)}
          />
          <Component0937
            label="Page 9 field 64"
            value={values[63]}
            onApply={(nextValue) => updateValue(63, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 65">
          <span>Page 9 field 65</span>
          <input
            aria-label="Page 9 field 65 input"
            value={values[64]}
            onChange={(event) => updateValue(64, event.target.value)}
          />
          <Component0765
            label="Page 9 field 65"
            value={values[64]}
            onApply={(nextValue) => updateValue(64, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 66">
          <span>Page 9 field 66</span>
          <input
            aria-label="Page 9 field 66 input"
            value={values[65]}
            onChange={(event) => updateValue(65, event.target.value)}
          />
          <Component0297
            label="Page 9 field 66"
            value={values[65]}
            onApply={(nextValue) => updateValue(65, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 67">
          <span>Page 9 field 67</span>
          <input
            aria-label="Page 9 field 67 input"
            value={values[66]}
            onChange={(event) => updateValue(66, event.target.value)}
          />
          <Component0727
            label="Page 9 field 67"
            value={values[66]}
            onApply={(nextValue) => updateValue(66, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 68">
          <span>Page 9 field 68</span>
          <input
            aria-label="Page 9 field 68 input"
            value={values[67]}
            onChange={(event) => updateValue(67, event.target.value)}
          />
          <Component0523
            label="Page 9 field 68"
            value={values[67]}
            onApply={(nextValue) => updateValue(67, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 69">
          <span>Page 9 field 69</span>
          <input
            aria-label="Page 9 field 69 input"
            value={values[68]}
            onChange={(event) => updateValue(68, event.target.value)}
          />
          <Component0933
            label="Page 9 field 69"
            value={values[68]}
            onApply={(nextValue) => updateValue(68, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 70">
          <span>Page 9 field 70</span>
          <input
            aria-label="Page 9 field 70 input"
            value={values[69]}
            onChange={(event) => updateValue(69, event.target.value)}
          />
          <Component0902
            label="Page 9 field 70"
            value={values[69]}
            onApply={(nextValue) => updateValue(69, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 71">
          <span>Page 9 field 71</span>
          <input
            aria-label="Page 9 field 71 input"
            value={values[70]}
            onChange={(event) => updateValue(70, event.target.value)}
          />
          <Component0589
            label="Page 9 field 71"
            value={values[70]}
            onApply={(nextValue) => updateValue(70, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 72">
          <span>Page 9 field 72</span>
          <input
            aria-label="Page 9 field 72 input"
            value={values[71]}
            onChange={(event) => updateValue(71, event.target.value)}
          />
          <Component0453
            label="Page 9 field 72"
            value={values[71]}
            onApply={(nextValue) => updateValue(71, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 73">
          <span>Page 9 field 73</span>
          <input
            aria-label="Page 9 field 73 input"
            value={values[72]}
            onChange={(event) => updateValue(72, event.target.value)}
          />
          <Component0292
            label="Page 9 field 73"
            value={values[72]}
            onApply={(nextValue) => updateValue(72, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 74">
          <span>Page 9 field 74</span>
          <input
            aria-label="Page 9 field 74 input"
            value={values[73]}
            onChange={(event) => updateValue(73, event.target.value)}
          />
          <Component0899
            label="Page 9 field 74"
            value={values[73]}
            onApply={(nextValue) => updateValue(73, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 75">
          <span>Page 9 field 75</span>
          <input
            aria-label="Page 9 field 75 input"
            value={values[74]}
            onChange={(event) => updateValue(74, event.target.value)}
          />
          <Component0025
            label="Page 9 field 75"
            value={values[74]}
            onApply={(nextValue) => updateValue(74, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 76">
          <span>Page 9 field 76</span>
          <input
            aria-label="Page 9 field 76 input"
            value={values[75]}
            onChange={(event) => updateValue(75, event.target.value)}
          />
          <Component0155
            label="Page 9 field 76"
            value={values[75]}
            onApply={(nextValue) => updateValue(75, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 77">
          <span>Page 9 field 77</span>
          <input
            aria-label="Page 9 field 77 input"
            value={values[76]}
            onChange={(event) => updateValue(76, event.target.value)}
          />
          <Component0048
            label="Page 9 field 77"
            value={values[76]}
            onApply={(nextValue) => updateValue(76, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 78">
          <span>Page 9 field 78</span>
          <input
            aria-label="Page 9 field 78 input"
            value={values[77]}
            onChange={(event) => updateValue(77, event.target.value)}
          />
          <Component0257
            label="Page 9 field 78"
            value={values[77]}
            onApply={(nextValue) => updateValue(77, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 79">
          <span>Page 9 field 79</span>
          <input
            aria-label="Page 9 field 79 input"
            value={values[78]}
            onChange={(event) => updateValue(78, event.target.value)}
          />
          <Component0954
            label="Page 9 field 79"
            value={values[78]}
            onApply={(nextValue) => updateValue(78, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 80">
          <span>Page 9 field 80</span>
          <input
            aria-label="Page 9 field 80 input"
            value={values[79]}
            onChange={(event) => updateValue(79, event.target.value)}
          />
          <Component0710
            label="Page 9 field 80"
            value={values[79]}
            onApply={(nextValue) => updateValue(79, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 81">
          <span>Page 9 field 81</span>
          <input
            aria-label="Page 9 field 81 input"
            value={values[80]}
            onChange={(event) => updateValue(80, event.target.value)}
          />
          <Component0944
            label="Page 9 field 81"
            value={values[80]}
            onApply={(nextValue) => updateValue(80, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 82">
          <span>Page 9 field 82</span>
          <input
            aria-label="Page 9 field 82 input"
            value={values[81]}
            onChange={(event) => updateValue(81, event.target.value)}
          />
          <Component0214
            label="Page 9 field 82"
            value={values[81]}
            onApply={(nextValue) => updateValue(81, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 83">
          <span>Page 9 field 83</span>
          <input
            aria-label="Page 9 field 83 input"
            value={values[82]}
            onChange={(event) => updateValue(82, event.target.value)}
          />
          <Component0587
            label="Page 9 field 83"
            value={values[82]}
            onApply={(nextValue) => updateValue(82, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 84">
          <span>Page 9 field 84</span>
          <input
            aria-label="Page 9 field 84 input"
            value={values[83]}
            onChange={(event) => updateValue(83, event.target.value)}
          />
          <Component0184
            label="Page 9 field 84"
            value={values[83]}
            onApply={(nextValue) => updateValue(83, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 85">
          <span>Page 9 field 85</span>
          <input
            aria-label="Page 9 field 85 input"
            value={values[84]}
            onChange={(event) => updateValue(84, event.target.value)}
          />
          <Component0480
            label="Page 9 field 85"
            value={values[84]}
            onApply={(nextValue) => updateValue(84, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 86">
          <span>Page 9 field 86</span>
          <input
            aria-label="Page 9 field 86 input"
            value={values[85]}
            onChange={(event) => updateValue(85, event.target.value)}
          />
          <Component0005
            label="Page 9 field 86"
            value={values[85]}
            onApply={(nextValue) => updateValue(85, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 87">
          <span>Page 9 field 87</span>
          <input
            aria-label="Page 9 field 87 input"
            value={values[86]}
            onChange={(event) => updateValue(86, event.target.value)}
          />
          <Component0435
            label="Page 9 field 87"
            value={values[86]}
            onApply={(nextValue) => updateValue(86, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 88">
          <span>Page 9 field 88</span>
          <input
            aria-label="Page 9 field 88 input"
            value={values[87]}
            onChange={(event) => updateValue(87, event.target.value)}
          />
          <Component0039
            label="Page 9 field 88"
            value={values[87]}
            onApply={(nextValue) => updateValue(87, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 89">
          <span>Page 9 field 89</span>
          <input
            aria-label="Page 9 field 89 input"
            value={values[88]}
            onChange={(event) => updateValue(88, event.target.value)}
          />
          <Component0218
            label="Page 9 field 89"
            value={values[88]}
            onApply={(nextValue) => updateValue(88, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 90">
          <span>Page 9 field 90</span>
          <input
            aria-label="Page 9 field 90 input"
            value={values[89]}
            onChange={(event) => updateValue(89, event.target.value)}
          />
          <Component0549
            label="Page 9 field 90"
            value={values[89]}
            onApply={(nextValue) => updateValue(89, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 91">
          <span>Page 9 field 91</span>
          <input
            aria-label="Page 9 field 91 input"
            value={values[90]}
            onChange={(event) => updateValue(90, event.target.value)}
          />
          <Component0135
            label="Page 9 field 91"
            value={values[90]}
            onApply={(nextValue) => updateValue(90, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 92">
          <span>Page 9 field 92</span>
          <input
            aria-label="Page 9 field 92 input"
            value={values[91]}
            onChange={(event) => updateValue(91, event.target.value)}
          />
          <Component0629
            label="Page 9 field 92"
            value={values[91]}
            onApply={(nextValue) => updateValue(91, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 93">
          <span>Page 9 field 93</span>
          <input
            aria-label="Page 9 field 93 input"
            value={values[92]}
            onChange={(event) => updateValue(92, event.target.value)}
          />
          <Component0981
            label="Page 9 field 93"
            value={values[92]}
            onApply={(nextValue) => updateValue(92, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 94">
          <span>Page 9 field 94</span>
          <input
            aria-label="Page 9 field 94 input"
            value={values[93]}
            onChange={(event) => updateValue(93, event.target.value)}
          />
          <Component0294
            label="Page 9 field 94"
            value={values[93]}
            onApply={(nextValue) => updateValue(93, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 95">
          <span>Page 9 field 95</span>
          <input
            aria-label="Page 9 field 95 input"
            value={values[94]}
            onChange={(event) => updateValue(94, event.target.value)}
          />
          <Component0651
            label="Page 9 field 95"
            value={values[94]}
            onApply={(nextValue) => updateValue(94, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 96">
          <span>Page 9 field 96</span>
          <input
            aria-label="Page 9 field 96 input"
            value={values[95]}
            onChange={(event) => updateValue(95, event.target.value)}
          />
          <Component0133
            label="Page 9 field 96"
            value={values[95]}
            onApply={(nextValue) => updateValue(95, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 97">
          <span>Page 9 field 97</span>
          <input
            aria-label="Page 9 field 97 input"
            value={values[96]}
            onChange={(event) => updateValue(96, event.target.value)}
          />
          <Component0219
            label="Page 9 field 97"
            value={values[96]}
            onApply={(nextValue) => updateValue(96, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 98">
          <span>Page 9 field 98</span>
          <input
            aria-label="Page 9 field 98 input"
            value={values[97]}
            onChange={(event) => updateValue(97, event.target.value)}
          />
          <Component0615
            label="Page 9 field 98"
            value={values[97]}
            onApply={(nextValue) => updateValue(97, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 99">
          <span>Page 9 field 99</span>
          <input
            aria-label="Page 9 field 99 input"
            value={values[98]}
            onChange={(event) => updateValue(98, event.target.value)}
          />
          <Component0064
            label="Page 9 field 99"
            value={values[98]}
            onApply={(nextValue) => updateValue(98, nextValue)}
          />
        </label>
      

        <label className="input-card" key="Page 9 field 100">
          <span>Page 9 field 100</span>
          <input
            aria-label="Page 9 field 100 input"
            value={values[99]}
            onChange={(event) => updateValue(99, event.target.value)}
          />
          <Component0991
            label="Page 9 field 100"
            value={values[99]}
            onApply={(nextValue) => updateValue(99, nextValue)}
          />
        </label>
      
          </div>
        </section>
      );
    }
