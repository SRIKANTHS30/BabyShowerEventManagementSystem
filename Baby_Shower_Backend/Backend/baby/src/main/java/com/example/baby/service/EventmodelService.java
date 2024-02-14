package com.example.baby.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.baby.model.Event;
import com.example.baby.repo.EventRepo;
@Service
public class EventmodelService {
    @Autowired
    EventRepo repository;

    public String bookEvents(Event event) {
	repository.save(event);
	return "added";
}

public List<Event > getEvent(){
	return repository.findAll();
}

public String deleteEventById(int id) {
	repository.deleteById(id);;
	return "deleted";
}

public Event editEventById(Event event) {
	repository.save(event);
	return event;
}

}