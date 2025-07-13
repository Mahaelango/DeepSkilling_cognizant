package com.cognizant.spring_learn_country_clean.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.cognizant.spring_learn_country_clean.Country;
import com.cognizant.spring_learn_country_clean.service.CountryService;

@RestController
public class CountryController {

    @Autowired
    private CountryService countryService;

    @GetMapping("/countries/{code}")
    public Country getCountry(@PathVariable String code) {
        System.out.println("Start getCountry()");
        Country country = countryService.getCountry(code);
        System.out.println("End getCountry()");
        return country;
    }
}
