# -*- coding:utf-8 -*-
# !/usr/bin/env python3
# -*- coding: utf-8 -*-
import numpy as np
import json
class MyEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, np.ndarray):
            return obj.tolist()
        elif isinstance(obj, bytes):
            return str(obj, encoding='utf-8');
        return json.JSONEncoder.default(self, obj)