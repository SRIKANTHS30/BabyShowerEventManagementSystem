package com.example.baby.service;

import com.example.baby.model.Addon;
import com.example.baby.repo.AddonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AddonService {
    private final AddonRepository addonRepository;

    @Autowired
    public AddonService(AddonRepository addonRepository) {
        this.addonRepository = addonRepository;
    }

    public List<Addon> getAllAddons() {
        return addonRepository.findAll();
    }

    public Optional<Addon> getAddonById(int addonId) {
        return addonRepository.findById(addonId);
    }

    public Addon saveAddon(Addon addon) {
        return addonRepository.save(addon);
    }

    public void deleteAddon(int addonId) {
        addonRepository.deleteById(addonId);
    }
    public Addon updateAddon(int id, Addon updatedAddon) {
        Optional<Addon> existingAddonOptional = addonRepository.findById(id);
        if (existingAddonOptional.isPresent()) {
            Addon existingAddon = existingAddonOptional.get();
            existingAddon.setAddonName(updatedAddon.getAddonName());
            existingAddon.setAddonDescription(updatedAddon.getAddonDescription());
            existingAddon.setPrice(updatedAddon.getPrice());
            return addonRepository.save(existingAddon);
        }
        return null;
    }
    
    
}
