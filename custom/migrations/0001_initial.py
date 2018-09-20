# Generated by Django 2.1.1 on 2018-09-19 19:33

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='RiskField',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True,
                                        serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120)),
                ('type', models.CharField(choices=[
                    ('text', 'Text'),
                    ('enum', 'Enum'),
                    ('date', 'Date'),
                    ('number', 'Number'),
                    ('currency', 'Currency'),
                    ('option', 'Option'),
                    ('color', 'Color'),
                    ('bool', 'Boolean')
                ], default='text', max_length=20)),
                ('options', django.contrib.postgres.fields.ArrayField(
                    base_field=models.CharField(max_length=50), size=None)
                 ),
            ],
        ),
        migrations.CreateModel(
            name='RiskType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True,
                                        serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120)),
            ],
        ),
    ]