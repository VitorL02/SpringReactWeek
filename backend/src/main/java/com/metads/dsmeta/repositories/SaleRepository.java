package com.metads.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.metads.dsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale,Long> {

}
