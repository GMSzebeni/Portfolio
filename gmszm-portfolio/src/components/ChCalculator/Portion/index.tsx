import { useState } from "react";
import styles from './Portion.module.css'
import ChCalculatorService from '@/services/ChCalculatorService';

const Portion = () => {
    const [portion, setPortion] = useState({
        chIn100Gram: '',
        foodInGram: '',
    });

    const [comment, setComment] = useState({
        message: ''
    });

    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setPortion({ ...portion, [name]: value });
    }

    const resetFields = () => {
        setPortion({
            chIn100Gram: '',
            foodInGram: ''
        })
    }

    const calculate = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const chIn100Gram = portion.chIn100Gram === '' ? NaN : Number(portion.chIn100Gram);
        const foodInGram = portion.foodInGram === '' ? NaN : Number(portion.foodInGram);
        if (isNaN(chIn100Gram) || isNaN(foodInGram)) {
            setComment({ message: 'Please provide valid numbers!' });
        } else if (chIn100Gram > 100) {
               setComment({ message: '100 gram food cannot contain more than 100 gram CH!' })
        } else {
            ChCalculatorService.calculatePortion({ chIn100Gram, foodInGram })
            .then((response) => {
                setComment({message: 'The portion (' + portion.foodInGram + 'g) contains ' + response.data.toFixed(2) + 'g CH.'})
                console.log(response);
            }).catch((error) => {
                setComment({message: 'Something went wrong! Please check the data provided!'})
                console.log(error.response.data);
                console.log(error);
            });
        }
    }

    return(        
        <div className={styles.container}>
            <div className={styles.bg}></div>
            <div className={styles.bg2}></div>
            <div className={styles.bg3}></div>
            <ul className={styles.ul}>
                <li>
                    <a 
                        href="https://gmszm.hu/ch-calculator/target" 
                        className={styles.a}>
                        TARGET
                    </a>
                </li>
            </ul>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <img 
                        className={styles.img}
                        src="/img/CHlogo2.png" 
                        width={150} 
                        height={150}
                        alt="logo" />
                    <h1 
                        className={styles.h1}>
                        Calculator
                    </h1>
                </div>
                <div className={styles.form}>
                    <div className={styles.formElement}>
                        <label 
                            className={styles.label}
                            htmlFor="portion">
                            Portion: 
                        </label>
                        <input 
                            className={styles.input}
                            type="text" 
                            name="foodInGram" 
                            id="portion" 
                            placeholder="weight of portion in grams"
                            value={portion.foodInGram}
                            onChange={(e) => handleChange(e)}
                            required={true}/>
                    </div>
                    <div className={styles.formElement}>
                        <label 
                            className={styles.label}
                            htmlFor="ch100">
                            100g/ CH: 
                        </label>
                        <input 
                            className={styles.input}
                            type="text" 
                            name="chIn100Gram" 
                            id="ch100" 
                            placeholder="check package for CH in 100g"
                            value={portion.chIn100Gram}
                            onChange={(e) => handleChange(e)}
                            required={true}/>
                    </div>
                    <h2 className={styles.h2}>{comment.message}</h2>
                    <button 
                        className={styles.submit} 
                        type='submit'
                        onClick={calculate}>
                        Calculate
                    </button>
                    <button 
                        className={styles.reset} 
                        type='reset'
                        onClick={resetFields}>
                        Reset
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Portion;