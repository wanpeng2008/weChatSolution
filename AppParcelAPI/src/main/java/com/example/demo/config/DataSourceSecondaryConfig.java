package com.example.demo.config;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.jdbc.DataSourceBuilder;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

/**
 * Created by pengwan on 2017/6/14.
 */
@Configuration
public class DataSourceSecondaryConfig {
    @Bean(name = "secondaryDS") @Qualifier("secondaryDS")
    @ConfigurationProperties(prefix="multi-datasource.secondary.datasource")
    public DataSource secondaryDataSource(){
        return DataSourceBuilder.create().build();
    }
}
