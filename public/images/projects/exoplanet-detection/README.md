# Exoplanet Detection Project - Images Folder

## Overview
This folder contains all image assets for the exoplanet detection machine learning project, including datasets, visualizations, and project documentation images.

## Folder Structure

### `/datasets/`
- **Raw light curve data**: FITS files and converted images from space telescopes (Kepler, TESS, etc.)
- **Processed images**: Normalized and preprocessed light curve visualizations
- **Augmented datasets**: Rotated, scaled, and noise-added variations for model training

### `/visualizations/`
- **Training progress**: Loss curves, accuracy plots, and model performance metrics
- **Feature maps**: CNN activation visualizations and learned feature representations
- **Confusion matrices**: Classification results and error analysis charts
- **Sample predictions**: Before/after images showing model predictions on test data

### `/documentation/`
- **Architecture diagrams**: Neural network structure and data pipeline flowcharts
- **Research figures**: Publication-ready plots and scientific visualizations
- **Presentation slides**: Images for research presentations and reports

## Image Requirements

### Dataset Images
- **Format**: PNG, JPG, or FITS (for raw astronomical data)
- **Resolution**: Minimum 224x224 pixels for CNN compatibility
- **Naming convention**: `{source}_{target_id}_{timestamp}.{ext}`
- **Color space**: Grayscale for light curves, RGB for composite visualizations

### Visualization Images
- **Format**: PNG or SVG for scalability
- **DPI**: 300+ for publication quality
- **Size**: Maximum 10MB per file
- **Labels**: Clear axis labels, legends, and titles

### Documentation Images
- **Format**: PNG or SVG preferred
- **Resolution**: Vector graphics when possible
- **Compression**: Optimize for web while maintaining clarity
- **Accessibility**: Include alt text descriptions

## Data Sources
- **Kepler Space Telescope**: Primary transit photometry data
- **TESS (Transiting Exoplanet Survey Satellite)**: High-cadence observations
- **Ground-based observatories**: Supplementary confirmation data
- **Simulated data**: Synthetic light curves for augmentation

## Usage Guidelines
1. **Version control**: Use Git LFS for large image files (>100MB)
2. **Preprocessing**: Apply consistent normalization and scaling
3. **Quality assurance**: Validate image integrity before training
4. **Documentation**: Maintain metadata for each image batch
5. **Backup**: Regular backups of irreplaceable observational data

## File Naming Convention
{category}_{subcategory}_{identifier}_{version}.{ext}

Examples:
- dataset_kepler_k2-138b_v1.fits
- viz_training_epoch_loss_v2.png
- doc_architecture_cnn_model_final.svg
## Notes
- Keep raw astronomical data in original FITS format when possible
- Use lossless compression for scientific accuracy
- Include calibration and metadata files alongside images
- Consider storage limitations for large datasets (>1TB)

For questions about image requirements or processing procedures, consult the project documentation or contact the research team.