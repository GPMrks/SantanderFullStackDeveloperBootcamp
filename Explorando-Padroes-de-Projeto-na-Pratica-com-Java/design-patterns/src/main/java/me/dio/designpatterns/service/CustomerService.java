package me.dio.designpatterns.service;

import me.dio.designpatterns.model.Customer;

public interface CustomerService {

    Iterable<Customer> findAll();

    Customer findById(Long id);

    void save(Customer customer);

    void update(Long id, Customer customer);

    void delete(Long id);

}
