package me.dio.designpatterns.service.impl;

import me.dio.designpatterns.model.Address;
import me.dio.designpatterns.model.Customer;
import me.dio.designpatterns.repository.AddressRepository;
import me.dio.designpatterns.repository.CustomerRepository;
import me.dio.designpatterns.service.CustomerService;
import me.dio.designpatterns.service.ViaCepService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomerServiceImpl implements CustomerService {

    // SINGLETON: Injetar os componentes do Spring com @Autowired
    @Autowired
    private CustomerRepository customerRepository;
    @Autowired
    private AddressRepository addressRepository;
    @Autowired
    private ViaCepService viaCepService;

    // STRATEGY: Implementar todos os métodos definidos na interface
    // FACADE: Abstrair integrações com subsistemas, provendo uma interface simples (No caso utilizando o ViaCep)

    @Override
    public Iterable<Customer> findAll() {
        return customerRepository.findAll();
    }

    @Override
    public Customer findById(Long id) {
        Optional<Customer> customer = customerRepository.findById(id);
        if (customer.isEmpty()){
            return null;
        }
        return customer.get();
    }

    @Override
    public void save(Customer customer) {
        saveCustomerWithCep(customer);
    }

    @Override
    public void update(Long id, Customer customer) {
        Optional<Customer> customerBD = customerRepository.findById(id);
        if (customerBD.isPresent()){
            saveCustomerWithCep(customer);
        }
    }

    @Override
    public void delete(Long id) {
        customerRepository.deleteById(id);
    }

    private void saveCustomerWithCep(Customer customer) {
        String cep = customer.getAddress().getCep();
        Address address = addressRepository.findById(cep).orElseGet(() -> {
            Address newAddress = viaCepService.searchCep(cep);
            addressRepository.save(newAddress);
            return newAddress;
        });
        customer.setAddress(address);
        customerRepository.save(customer);
    }
}
