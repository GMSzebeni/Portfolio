package com.gmszm.gmszmportfoliomail.services;

import com.gmszm.gmszmportfoliomail.models.Portion;
import com.gmszm.gmszmportfoliomail.models.Target;

public interface ChCalculatorService {
    Double calculateChInFood(Portion chInFood);
    Double calculateGramYouCanEat(Target gramYouCanEat);
}
