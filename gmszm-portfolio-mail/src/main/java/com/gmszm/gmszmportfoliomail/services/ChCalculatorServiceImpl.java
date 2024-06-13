package com.gmszm.gmszmportfoliomail.services;

import org.springframework.stereotype.Service;

import com.gmszm.gmszmportfoliomail.models.Portion;
import com.gmszm.gmszmportfoliomail.models.Target;

@Service
public class ChCalculatorServiceImpl implements ChCalculatorService {

    @Override
    public Double calculateChInFood(Portion chInFood) {
        return chInFood.getChIn100Gram() / 100 * chInFood.getFoodInGram(); 
    }

    @Override
    public Double calculateGramYouCanEat(Target gramYouCanEat) {
        return 100 / gramYouCanEat.getChIn100Gram() * gramYouCanEat.getChYouWantToEat(); 
    }
}
