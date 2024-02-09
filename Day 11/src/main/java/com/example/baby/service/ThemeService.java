// ThemeService.java
package com.example.baby.service;

import com.example.baby.model.Theme;
import com.example.baby.repo.ThemeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ThemeService {
    private final ThemeRepository themeRepository;

    public ThemeService(ThemeRepository themeRepository) {
        this.themeRepository = themeRepository;
    }

    public List<Theme> getAllThemes() {
        return themeRepository.findAll();
    }

    public Theme getThemeById(int id) {
        return themeRepository.findById(id).orElse(null);
    }

    public Theme saveTheme(Theme theme) {
        return themeRepository.save(theme);
    }

    public void deleteTheme(int id) {
        themeRepository.deleteById(id);
    }

    public Theme updateTheme(int id, Theme updatedTheme) {
        Optional<Theme> existingThemeOptional = themeRepository.findById(id);
        if (existingThemeOptional.isPresent()) {
            Theme existingTheme = existingThemeOptional.get();
            existingTheme.setThemeName(updatedTheme.getThemeName());
            existingTheme.setThemeURL(updatedTheme.getThemeURL());
            existingTheme.setDescription(updatedTheme.getDescription()); // Corrected line
            existingTheme.setCost(updatedTheme.getCost());
            return themeRepository.save(existingTheme);
        }
        return null;
    }
}
