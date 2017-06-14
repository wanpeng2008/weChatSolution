package com.example.demo.config;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.jdbc.DataSourceBuilder;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

import javax.sql.DataSource;

/**
 * Created by pengwan on 2017/6/14.
 */
@Configuration
public class DataSourcePrimaryConfig {

    @Bean(name = "primaryDS") @Qualifier("primaryDS")
    @Primary
    @ConfigurationProperties(prefix="multi-datasource.primary.datasource")
    public DataSource primaryDataSource(){
        return DataSourceBuilder.create().build();
    }

}
